import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppConfig } from './app.config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from './users/users.module'
import { ProductsModule } from './products/products.module'
import { AuthModule } from './auth/auth.module'
import { MachineModule } from './machine/machine.module'
import { PriceModule } from './price/price.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [AppConfig],
      cache: true,
    }),
    UsersModule,
    ProductsModule,
    AuthModule,
    MachineModule,
    PriceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
