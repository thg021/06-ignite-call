import { Adapter } from 'next-auth/adapters'
import { prisma } from '../prisma'

export function PrismaAdapter(): Adapter {
  return {
    async createUser(user): Promise<any> {},

    async getUser(id) {
      const user = await prisma.user.findUniqueOrThrow({
        where: {
          id,
        },
      })

      return {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email!,
        emailVerified: null,
        avatar_url: user.avatar_url!,
      }
    },

    async getUserByEmail(email): Promise<any> {
      const user = await prisma.user.findFirstOrThrow({
        where: {
          email,
        },
      })

      return {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email!,
        emailVerified: null,
        avatar_url: user.avatar_url!,
      }
    },
    async getUserByAccount({ providerAccountId, provider }): Promise<any> {},

    async updateUser(user): Promise<any> {},

    async deleteUser(userId): Promise<any> {},

    async linkAccount(account): Promise<any> {},

    async unlinkAccount({ providerAccountId, provider }): Promise<any> {},

    async createSession({ sessionToken, userId, expires }): Promise<any> {},

    async getSessionAndUser(sessionToken): Promise<any> {},

    async updateSession({ sessionToken }): Promise<any> {},

    async deleteSession(sessionToken): Promise<any> {},

    async createVerificationToken({
      identifier,
      expires,
      token,
    }): Promise<any> {},

    async useVerificationToken({ identifier, token }): Promise<any> {},
  }
}
