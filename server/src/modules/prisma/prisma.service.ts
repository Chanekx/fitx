import type { OnModuleInit } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import type { Prisma } from '@prisma/client';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  /**
   * Function that enables transaction routing
   */
  async withTransaction<T>(
    fn: (prisma: Prisma.TransactionClient) => Promise<T>,
    transactionClient?: Prisma.TransactionClient,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): Promise<T> {
    if (transactionClient) return await fn(transactionClient);

    return await this.$transaction(fn, options);
  }
}
