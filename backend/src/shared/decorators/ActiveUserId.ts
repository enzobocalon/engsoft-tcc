import {
  ExecutionContext,
  UnauthorizedException,
  createParamDecorator,
} from '@nestjs/common';

export const ActiveUserId = createParamDecorator<undefined>(
  (data, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    const userId = request.userId;
    if (!userId || !request) {
      throw new UnauthorizedException();
    }

    return userId;
  },
);
