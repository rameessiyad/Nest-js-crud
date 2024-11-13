import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  //create a new user
  async createUser(data: {
    name: string;
    email: string;
    password: string;
  }): Promise<User> {
    return this.prisma.user.create({ data });
  }

  //get all users
  async getUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  //get a single user by id
  async getUserById(id: number): Promise<User> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  //update a user by id
  async updateUser(
    id: number,
    data: { name?: string; email?: string; password?: string },
  ): Promise<User> {
    return this.prisma.user.update({ where: { id }, data });
  }

  //delete a user by id
  async deleteuser(id: number): Promise<User> {
    return this.prisma.user.delete({ where: { id } });
  }
}
