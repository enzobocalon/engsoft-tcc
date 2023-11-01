import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { DatabaseModule } from './shared/database/database.module';
import { AuthGuard } from './modules/auth/auth.guard';
import { DocumentsModule } from './modules/documents/documents.module';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public', 'documents'),
      serveStaticOptions: {
        index: false,
      },
      serveRoot: '/public/documents',
    }),
    AuthModule,
    DatabaseModule,
    DocumentsModule,
  ],
  controllers: [],
  providers: [
    {
      provide: 'APP_GUARD',
      useValue: AuthGuard,
    },
  ],
})
export class AppModule {}
