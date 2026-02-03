import { Injectable } from "@nestjs/common";
import { ProjectRequestDto } from "./projects.dto";

@Injectable()
export class ProjectsService {
  findAll() {
    return ["teste1", "teste2"];
  }

  findById(id: string) {
    return "teste1";
  }

  create(data: ProjectRequestDto) {
    return "create teste1";
  }

  update(id: string, data: ProjectRequestDto) {
    return "update teste1";
  }

  remove(id: string) {
    return "remove teste1";
  }
}
