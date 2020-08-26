import { startOfHour, parseISO, isBefore, format } from 'date-fns';
import * as Yup from 'yup';
import pt from 'date-fns/locale/pt';

import Appointment from '../models/Appointment';
import File from '../models/File';
import Notification from '../schemas/Notification';
import User from '../models/User';

class AppointmentController {

  async index(req, res) {

    const { page } = req.query;

    const appointments = await Appointment.findAll({
      where: {
        user_id: req.userId,
        canceled_at: null
      },
      order: ['date'],
      attributes: ['id', 'date'],
      limit: 20,
      offset: (page - 1) * 20,
      include:[{
        model: User,
        as: 'provider',
        attributes: ['id', 'name'],
        include: [{
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url']
        }]
      }]
    });

    return res.json(appointments);
  }

  async store (req, res) {
    const schema = Yup.object().shape({
      provider_id: Yup.number().required(),
      date: Yup.date().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        error: 'Validation fails'
      });
    }

    const { provider_id, date } = req.body;
    const checkIsProvider = await User.findOne({
      where: { id: provider_id, provider: true }
    });

    /**
     * Check if provider_id is a provider
    */
    if (!checkIsProvider) {
      return res.status(401).json({
        error: 'You can only create appointments with providers'
      })
    }

    const hourStart = startOfHour(parseISO(date));

    if (isBefore(hourStart, new Date())) {
      return res.status(400).json({
        error: 'Past dates are not permitted'
      });
    }


    /**
     * Checks if the user is scheduling an appointment with himself
    */
    if (provider_id === req.userId) {
      return res.status(400).json({
        error: 'User cannot scheduling an appointment with himself'
      });
    }

    /**
     * Check date availability
    */
    const checkAvailability = await Appointment.findOne({
      where: {
        provider_id,
        canceled_at: null,
        date: hourStart
      }
    });

    if (checkAvailability) {
      return res.status(400).json({
        error: 'Appointment date is not available'
      });
    }

    const appointment = await Appointment.create({
      user_id: req.userId,
      provider_id,
      date: hourStart
    });

    /**
     * Notify appointment provider
    */

    const user = await User.findByPk(req.userId);
    const formattedDate = format(
      hourStart,
      "'dia' dd 'de' MMMM', às' H:mm'h'",
      { locale: pt }
    )

    await Notification.create({
      content: `Novo agendamento de ${user.name} para ${formattedDate}`,
      user: provider_id
    });

    return res.json(appointment);
  }
}

export default new AppointmentController();
