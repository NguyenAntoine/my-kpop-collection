import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ResourceException {
  checkIfExists(resource, message: string) {
    if (!resource) throw new NotFoundException(message);
  }
}
