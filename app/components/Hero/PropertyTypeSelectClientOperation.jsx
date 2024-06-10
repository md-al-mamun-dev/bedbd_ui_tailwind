'use client'
import { useEffect } from "react"

export default function PropertyTypeInput() {
  useEffect(() => {
    const propertyTypeSelect = document.getElementById('property_type_select');
    const inputElements = propertyTypeSelect.querySelectorAll('input');

    const onChangeHandler = (e) => {
      const inputElementId = e.target.id;
      const labelElements = propertyTypeSelect.querySelectorAll('label');

      labelElements.forEach(label => {
        const isTargetLabel = label.getAttribute('for') === inputElementId;
        label.classList.toggle('custom-btm-line-primary-400', isTargetLabel);
      });
    };

    inputElements.forEach(input => {
      input.addEventListener('change', onChangeHandler);
    });

    document.getElementById('all').click()
  }, []);

  return null;
}