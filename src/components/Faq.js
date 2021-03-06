/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Show,
  List,
  Edit,
  Datagrid,
  TextField,
  Create,
  SimpleShowLayout,
  TextInput,
  SimpleForm,
  RichTextField,
  required,
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
import { OnShowToolbar } from '../services/Helpers';

const PostTitle = ({ record }) => {
  return <span>{record ? record.faq_title : ''}</span>;
};

export const faqList = (props) => {
  return (
    <div>
      <List {...props} title="FAQ">
        <Datagrid rowClick="show">
          <TextField source="faq_title" label="Question" />
          <RichTextField source="faq_content" label="Réponse" />
        </Datagrid>
      </List>
    </div>
  );
};

export const createFaq = (props) => {
  return (
    <div>
      <Create {...props} title="Créer une question">
        <SimpleForm>
          <TextInput
            source="faq_title"
            label="Question"
            validate={[required()]}
          />
          <RichTextInput
            source="faq_content"
            label="Réponse"
            validate={[required()]}
          />
        </SimpleForm>
      </Create>
    </div>
  );
};

export const showFaq = (props) => {
  return (
    <Show title={<PostTitle />} {...props} actions={<OnShowToolbar edit />}>
      <SimpleShowLayout>
        <TextField source="faq_title" label="Question" />
        <RichTextField source="faq_content" label="Réponse" />
      </SimpleShowLayout>
    </Show>
  );
};

export const faqEdit = (props) => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <TextInput source="faq_title" label="Question" validate={[required()]} />
      <RichTextInput
        source="faq_content"
        label="Réponse"
        validate={[required()]}
      />
    </SimpleForm>
  </Edit>
);
