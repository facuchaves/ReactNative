import homeResource from './home.resource';
import aboutResource from './about.resource';
import contactResource from './contact.resource';
import entityListResource from './entityList.resource';
import navigationResource from './navigation.resource';
import sidebarResource from './sidebar.resource';

const resources = {
  en: {
    translation: {
      ...homeResource.en.translation,
      ...aboutResource.en.translation,
      ...contactResource.en.translation,
      ...entityListResource.en.translation,
      ...navigationResource.en.translation,
      ...sidebarResource.en.translation,
    },
  },
};

export default resources;
