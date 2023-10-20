// SelectWithSearch.tsx
import React from "react";
import Select, { components } from "react-select";
import SearchIcon from "/public/images/search-icon.svg";
import Image from "next/image";

interface SelectWithSearchProps {
  options: { label: string; value: string }[];
  onChange: (selectedOption: { label: string; value: string } | null) => void;
  onInputChange?: any;
  menuIsOpen?: boolean;
  classname?: string;
}

const SelectWithSearch: React.FC<SelectWithSearchProps> = ({
  options,
  onChange,
  onInputChange,
  menuIsOpen,
  classname,
}) => {
  const DropdownIndicator = (props: any) => {
    return (
      components.DropdownIndicator && (
        <components.DropdownIndicator {...props}>
          <div className="bg-secondary rounded p-2 -mr-4">
            <Image alt="" src={SearchIcon} />
          </div>
        </components.DropdownIndicator>
      )
    );
  };

  const customStyles = {
    indicatorsContainer: (provided: any) => ({
      ...provided,
      marginLeft: "-18px",
    }),
    control: (provided: any) => ({
      ...provided,
      backgroundColor: "#F3F4F6", // Change the background color here
      border: "none",
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: "#1F2937",
      fontWeight: "700",
    }),
  };

  return (
    <div className={classname}>
      <Select
        options={options}
        onChange={onChange}
        onInputChange={onInputChange}
        isSearchable
        components={{ DropdownIndicator }}
        styles={customStyles}
        placeholder="انتخاب شهر"
        menuIsOpen={menuIsOpen}
      />
    </div>
  );
};

export default SelectWithSearch;
