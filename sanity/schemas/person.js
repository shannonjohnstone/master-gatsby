import { MdPerson as icon } from 'react-icons/md';

export default {
  name: 'person', // machine name
  title: 'Slice masters', // visible title
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of person',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Tell us about them!',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
