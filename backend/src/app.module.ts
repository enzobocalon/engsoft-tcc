import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './shared/database/database.module';
import { AuthGuard } from './modules/auth/auth.guard';
import { DocumentsModule } from './modules/documents/documents.module';

@Module({
  imports: [AuthModule, DatabaseModule, DocumentsModule],
  controllers: [],
  providers: [
    {
      provide: 'APP_GUARD',
      useValue: AuthGuard,
    },
  ],
})
export class AppModule {}
