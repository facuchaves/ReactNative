/* eslint-disable no-param-reassign */
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import EntityService from '../../services/Entity.service';

export enum EntityStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  ERROR = 'error',
  SUCCESS = 'success',
}

interface EntityState {
  entities: Array<any>;
  status: EntityStatus;
}

const initialState: EntityState = {
  entities: [],
  status: EntityStatus.IDLE,
};

export const getAll = createAsyncThunk(
  `entities/getAll`,
  EntityService.getAllEntities,
);

export const entitySlice = createSlice({
  name: 'entity',
  initialState,
  reducers: {
    createEntity: (state, {payload}) => {
      state.entities.push(payload);
    },
    updateEntity: (state, {payload}) => {
      const {id, name, score} = payload;
      const existingEntity = state.entities.find((entity) => entity.id === id);
      if (existingEntity) {
        existingEntity.name = `${name} edited`;
        existingEntity.score = score;
      }
    },
    deleteEntity: (state, {payload}: {payload: number}) => {
      const existingEntity = state.entities.find(
        (entity) => entity.id === payload,
      );
      if (existingEntity) {
        state.entities = state.entities.filter(
          (entity) => entity.id !== payload,
        );
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAll.pending, (state, action) => {
        state.status = EntityStatus.LOADING;
      })
      .addCase(getAll.fulfilled, (state, action) => {
        state.status = EntityStatus.SUCCESS;
        state.entities = action.payload;
      })
      .addCase(getAll.rejected, (state, action) => {
        state.status = EntityStatus.ERROR;
      });
  },
});

export const {createEntity, updateEntity, deleteEntity} = entitySlice.actions;

export default entitySlice.reducer;
