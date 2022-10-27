import {useEffect} from 'react';
import {EntityStatus, getAll} from '../features/entity/entitySlice';
import {useEntityDispatch, useEntitySelector} from './reactReduxHooks';

const useEntities = () => {
  const entitiesSelector = useEntitySelector((state) => state.entity);

  const {status, entities} = entitiesSelector;

  const dispatch = useEntityDispatch();

  useEffect(() => {
    if (EntityStatus.IDLE === status) {
      dispatch(getAll());
    }
  }, [dispatch, entities, status]);

  return {status, entities, dispatch};
};

export default useEntities;
