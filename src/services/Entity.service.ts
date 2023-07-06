import {BASE_URL_APIREST} from '@env';
import EntityModel from '../model/entity';

const axios = require('axios').default;

export default class EntityService {
  private entities: Array<EntityModel> = [
    {entity_id: 1, name: 'Entity 1', score: 10},
    {entity_id: 2, name: 'Entity 2', score: 20},
    {entity_id: 3, name: 'Entity 3', score: 30},
  ];

  static async getAllEntities(): Promise<Array<EntityModel>> {
    return axios
      .get(`${BASE_URL_APIREST}/api/resource`)
      .then((res: any) => res.data);
  }

  getEntityById(entityIdToSearch: number): EntityModel | undefined {
    return this.entities.find(
      (entity) => entity.entity_id === entityIdToSearch,
    );
  }

  createNewEntity(newEntity: EntityModel) {
    return this.entities.push(newEntity);
  }

  editEntityById(entityId: number, newEntity: EntityModel) {
    const newEntities = this.entities.map((entity) => {
      if (entity.entity_id === entityId) {
        return newEntity;
      }
      return entity;
    });

    this.entities = newEntities;
  }

  deleteEntityById(entityId: number) {
    const newEntities = this.entities.filter(
      (entity) => entity.entity_id !== entityId,
    );
    this.entities = newEntities;
  }
}
