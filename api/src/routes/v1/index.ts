import express, { NextFunction, Request, Response } from 'express'
import {
  sendEmailValidationController,
  verifyEmailController,
  loginController,
  createUserByEmailController,
  refreshTokenController,
} from '#controllers'
import {
  SendEmailSchemaType,
  MagicLinkSchemaType,
  LoginSchemaType,
  RegisterUserSchemaType,
  EmailSchemaType,
} from '#lib'
import { errorMiddleware } from 'src/middlewares/error'
import { loggerMiddleware } from 'src/middlewares/logger'
const router = express.Router()
router
  .route('/email/request')
  .post(
    (
      req: Request<object, object, SendEmailSchemaType>,
      res: Response,
      next: NextFunction
    ) => {
      sendEmailValidationController(req, res, next)
    }
  )

router
  .route('/email/verify')
  .post(
    (
      req: Request<object, object, MagicLinkSchemaType>,
      res: Response,
      next: NextFunction
    ) => {
      verifyEmailController(req, res, next)
    }
  )
router
  .route('/sign-in')
  .post(
    (
      req: Request<object, object, LoginSchemaType>,
      res: Response,
      next: NextFunction
    ) => {
      loginController(req, res, next)
    }
  )
router
  .route('/register')
  .post(
    (
      req: Request<object, object, RegisterUserSchemaType>,
      res: Response,
      next: NextFunction
    ) => {
      createUserByEmailController(req, res, next)
    }
  )
router
  .route('/refresh')
  .post(
    (
      req: Request<object, object, EmailSchemaType>,
      res: Response,
      next: NextFunction
    ) => {
      refreshTokenController(req, res, next)
    }
  )

router.route('/auth/google/callback').post()
router.use(loggerMiddleware)
router.use(errorMiddleware)
export default router
