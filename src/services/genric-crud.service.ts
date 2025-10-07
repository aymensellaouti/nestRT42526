import { NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";

export abstract class GenericCrud<Entity> {
    constructor(private repository: Repository<Entity>) { }
    create(createDto): Promise<Entity> {
        return this.repository.save(createDto)
    }

    async update(id: number, updateDto): Promise<Entity> {
        const newEntity = await this.repository.preload({ id, ...updateDto });
        if (!newEntity) throw new NotFoundException('Element not found');
        this.repository.save(newEntity);
        return newEntity;
    }
}