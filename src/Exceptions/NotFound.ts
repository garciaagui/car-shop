import statusCodes from '../Utils/statusCodes';
import HttpException from './HttpException';

export default class NotFoundException extends HttpException {
  private static status = statusCodes.notFound;

  constructor(message: string) {
    super(NotFoundException.status, message);
  }
}