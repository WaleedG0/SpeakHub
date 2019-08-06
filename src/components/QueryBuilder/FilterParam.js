// @flow
import React from "react";
import { Select } from "antd";
const { Option } = Select;

const FilterParam = ({
  options,
  value,
  onChange,
  selectType,
  placeholder,
  label,
  allowClear,
  style
}: {
  options: Array<string>,
  value?: Array<string> | string | typeof undefined,
  selectType: "default" | "multiple",
  onChange: (value: Array<string> | string) => void,
  placeholder: string,
  label: string,
  allowClear?: boolean,
  style?: Object
}) => (
  <Select
    mode={selectType}
    dropdownStyle={{ minWidth: 200 }}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    allowClear={allowClear || true}
    style={style}
  >
    <Option disabled value="disabled" label="disabled">
      {label}
    </Option>

    {options.map((label, i) => (
      <Option key={label + i} value={label} label={label}>
        {label}
      </Option>
    ))}
  </Select>
);

export default FilterParam;