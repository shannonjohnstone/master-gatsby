import React from 'react';
import FormField from 'part:@sanity/components/formfields/default';

import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';
import PropTypes from 'prop-types';
import { form } from '@sanity/structure/lib/views';
import { format } from 'prettier';

const createPatchForm = (value) =>
  PatchEvent.from(value === '' ? unset() : set(Number(value)));

export default function PriceInput(props) {
  const { value, type, onChange } = props;

  console.log(props, 'props');
  function handleOnChange(event) {
    console.log(value, 'value in onChange');
    console.log(event.target.value, 'event.target.value in onChange');
    const val = value ? event.target.value * 100 : event.target.value;
    console.log(val, '@@ val');
    onChange(createPatchForm(val));
  }

  function convertCentsToDollars(cents) {
    if (!cents) return undefined;

    const dollars = cents / 100;
    const formatted = dollars.toFixed(2);
    console.log(formatted, 'formatted');
    return formatted;
  }

  return (
    <FormField label={type.title} description={type.description}>
      <input value={convertCentsToDollars(value)} onChange={handleOnChange} />
    </FormField>
  );
}

PriceInput.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};
