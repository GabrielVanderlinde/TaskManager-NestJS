import { VersioningType } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // Versioonamento
  app.enableVersioning({
    type: VersioningType.URI,
  })

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('Manager Task API')
    .setDescription('API desenvolvida durante o curso de NestJS - Monaro Dev')
    .setVersion('1.0')
    .build()

  const documentFactory = () => SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, documentFactory)
  await app.listen(process.env.PORT ?? 3000)
}
bootstrap()
