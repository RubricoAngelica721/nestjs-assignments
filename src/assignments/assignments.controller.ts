import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentController {
  @Get('fibonacci/:n')
  fibonacci(@Param('n') n: number) {
    const sequence = [];
    let a = 0, e = 1;
    for (let i = 0; i < n; i++) {
      sequence.push(a);
      [a, e] = [e, a + e];
    }
    return { sequence };
  }
}