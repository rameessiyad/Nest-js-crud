import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(
    @Body() data: { name: string; email: string; password: string },
  ) {
    return this.userService.createUser(data);
  }

  @Get()
  async getUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: number) {
    return this.userService.getUserById(id);
  }

  @Patch(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() data: { name?: string; email?: string; password?: string },
  ) {
    return this.userService.updateUser(+id, data);
  }

  @Delete(':id')
  async deleteuser(@Param('id') id: string) {
    return this.userService.deleteuser(+id);
  }
}
