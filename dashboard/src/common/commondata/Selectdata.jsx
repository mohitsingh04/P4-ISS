import React, { useState } from "react";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
import makeAnimated from "react-select/animated";
import Select from "react-select";
import Creatable from "react-select/creatable";

export function AnimatedMulti() {
  const options = [
    { value: "Mountain Time Zone", label: "Mountain Time Zone" },
    { value: "Wyoming", label: "Wyoming" },
    { value: "Utah", label: "Utah" },
    { value: "Montana", label: "Montana" },
    { value: "Colorado", label: "Colorado" },
    { value: "Wyoming", label: "Wyoming" },

  ];
  const [selected, setSelected] = useState([]);
  return (
    <MultiSelect
      value={selected}
      onChange={setSelected}
      labelledBy="Select"
      disableSearch="true"
      options={options}
      shouldToggleOnHover="true"
    />
  );
}
//AnimatedMulti1
export function AnimatedMulti1() {
  const options = [
    { value: "Mountain Time Zone", label: "Mountain Time Zone" },
    { value: "Wyoming", label: "Wyoming" },
    { value: "Utah", label: "Utah" },
    { value: "Montana", label: "Montana" },
    { value: "Colorado", label: "Colorado" },
    { value: "Wyoming", label: "Wyoming" },

  ];
  const [selected, setSelected] = useState([]);
  return (

    <MultiSelect
      value={selected}
      onChange={setSelected}
      labelledBy="Select"
      options={options}
      classNamePrefix="background"
      shouldToggleOnHover="true"
      placeholder=""
    />

  );
}
//AnimatedMulti2

export function AnimatedMulti2() {
  const options = [
    { value: "Firefox", label: "Firefox" },
    { value: "Internet Explorer", label: "Internet Explorer" },
    { value: "Opera", label: "Opera" },
    { value: "Safari", label: "Safari" },
    { value: "Chrome selected", label: "Chrome selected" },
    { value: "Opera", label: "Opera" },

  ];
  const [selected, setSelected] = useState([]);
  return (
    <MultiSelect
      value={selected}
      onChange={setSelected}
      labelledBy="Select"
      disableSearch="true"
      options={options}

    />
  );
}
//SearchSelect1
export const SearchSelect1 = () => {
  const options = [
    { value: "Audi", label: "Audi" },
    { value: "BMW", label: "BMW" },
    { value: "volkswagen", label: "volkswagen" },
    { value: "Aston Martin", label: "Aston Martin" },
    { value: "mitsubishi", label: "mitsubishi" },
    { value: "hyundai", label: "hyundai" },
    { value: "fiat", label: "fiat" },]
  const [selected, setSelected] = useState([]);
  return (
    <MultiSelect
      value={selected}
      onChange={setSelected}
      labelledBy="Select"
      options={options}
    />
  );
};
// //Singleselect12
export const Singleselect12 = () => {
  const objectArray = [
    { label: "Volvo", value: "Group 1" },
    { label: "BMW", value: "Group 2" },
    { label: "Audi", value: "Group 3" },
    { label: "Saab", value: "Group 4" },
    { label: "Mercedes", value: "Group 5" },
    { label: "porche", value: "Group 6" },
    { label: "Tata", value: "Group 7" },
  ];
  const [selected, setSelected] = useState([]);
  return (
    <div>
      <MultiSelect value={selected}
        onChange={setSelected}
        labelledBy="Select" options={objectArray} singleSelect="true" />
    </div>
  );
};
//BasicMutipleSelect
export const BasicMutipleSelect = () => {
  const [selected, setSelected] = useState([]);
  const options = [
    { value: "Audi", label: "Audi" },
    { value: "BMW", label: "BMW" },
    { value: "volkswagen", label: "volkswagen" },
    { value: "Aston Martin", label: "Aston Martin" },
    { value: "mitsubishi", label: "mitsubishi" },
    { value: "hyundai", label: "hyundai" },
    { value: "fiat", label: "fiat" },
  ];
  return (

    <MultiSelect
      value={selected}
      onChange={setSelected}
      labelledBy="Select"
      disableSearch="true"
      options={options}
      showCheckbox="false"
    />
  );
};
//DisabledMutipleSelect
export const DisabledMutipleSelect = () => {
  const optionsMultiSelect1 = [
    { key: "First", cat: "Group 1" },
    { key: "Second", cat: "Group 1" },
    { key: "Third", cat: "Group 1" },
    { key: "Fourth", cat: "Group 2" },
  ];
  const [selected, setSelected] = useState([]);
  return (
    <div>
      <MultiSelect
        // options={optionsMultiSelect1}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
        disabled="true"
      />
    </div>
  );
};
//CustomSelectIcon
export function CustomSelectIcon() {
  return (
    <MultiSelect
      customCloseIcon={
        <>
          <i className="fa fa-clock-o tx-16 lh-0 op-6"></i>
        </>
      }
      onKeyPressFn={function noRefCheck() { }}
      onRemove={function noRefCheck() { }}
      onSearch={function noRefCheck() { }}
      onSelect={function noRefCheck() { }}
      options={[
        {
          cat: "Group 1",
          key: "January",
        },
        {
          cat: "Group 1",
          key: "February",
        },
        {
          cat: "Group 1",
          key: "March",
        },
        {
          cat: "Group 2",
          key: "April",
        },
        {
          cat: "Group 2",
          key: "May",
        },
        {
          cat: "Group 2",
          key: "June",
        },
        {
          cat: "Group 2",
          key: "July",
        },
        {
          cat: "Group 2",
          key: "August",
        },
      ]}
      selectedValues={[
        {
          cat: "Group 1",
          key: "January",
        },
        {
          cat: "Group 1",
          key: "February",
        },
      ]}
    />
  );
}
// //MultipleItems
export function MultipleItems() {
  const [selected, setSelected] = useState([]);
  const options = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4", disabled: "disabled" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9", disabled: "disabled" },
    { value: "10", label: "10" },
    { value: "11", label: "11" },
    { value: "12", label: "12", disabled: "disabled" },
  ]
  return (
    <MultiSelect
      options={options}
      value={selected}
      onChange={setSelected}
      labelledBy="Select"
      disableSearch="true"
    />
  );
}
//MultipleItemsWithGroupOption
export function MultipleItemsWithGroupOption() {
  const optionsGroupOptionMutipleSelect = [
    { value: "Audi", label: "Audi" },
    { value: "BMW", label: "BMW" },
    { value: "volkswagen", label: "volkswagen" },
    { value: "Aston Martin", label: "Aston Martin" },
    { value: "mitsubishi", label: "mitsubishi" },
    { value: "hyundai", label: "hyundai" },
    { value: "fiat", label: "fiat" },
  ];
  const [selected, setSelected] = useState([]);
  return (
    <div>
      <MultiSelect
        options={optionsGroupOptionMutipleSelect}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
        disableSearch="true"
      />
    </div>
  );
}
//GroupOptionMutipleSelect1
export function GroupOptionMutipleSelect1() {
  return (
    <MultiSelect
      isObject={false}
      onKeyPressFn={function noRefCheck() { }}
      onRemove={function noRefCheck() { }}
      onSearch={function noRefCheck() { }}
      onSelect={function noRefCheck() { }}
      options={[
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ]}
      showCheckbox
      selectedValues={["January", "March"]}
    />
  );
}
// Group-Option MutipleSelect
export function GroupOptionMutipleSelect() {
  const optionsGroupOptionMutipleSelect1 = [
    {
      value: "Month",
      label: "Month",
      options: [
        { value: "January", label: "January" },
        { value: "February", label: "February", isDisabled: "true" },
        { value: "March", label: "March" },
        { value: "April", label: "April" },
        { value: "May", label: "May" },
      ],
    },

    {
      value: "Brand",
      label: "Brand",
      options: [
        { value: "Audi", label: "Audi" },
        { value: "BMW", label: "BMW" },
        { value: "volkswagen", label: "volkswagen", isDisabled: "true" },
        { value: "Aston Martin", label: "Aston Martin" },
        { value: "mitsubishi", label: "mitsubishi" },
        { value: "hyundai", label: "hyundai", isDisabled: "true" },
        { value: "fiat", label: "fiat" },
      ],
    },
  ];
  function logChange(val) {
    console.log("Selected: " + JSON.stringify(val));
  }
  return (
    <div>
      <Select
        isMulti
        classNamePrefix="background"
        isFilterOption={true}
        isSearchable={false}
        isClearable={true}
        name="form-field-name"
        options={optionsGroupOptionMutipleSelect1}
        onChange={logChange}
      />
    </div>
  );
}
//Singleselectdis
export function Singleselectdis() {
  const optionsGroupOptionMutipleSelect = [
    {
      value: "Month",
      label: "Month",
      options: [
        { value: "January", label: "January" },
        { value: "February", label: "February", isDisabled: "true" },
        { value: "March", label: "March" },
        { value: "April", label: "April" },
        { value: "May", label: "May", isDisabled: "true" },
      ],
    },

    { value: "Brand", label: "Brand" },
    { value: "Audi", label: "Audi" },
    { value: "BMW", label: "BMW" },
    { value: "volkswagen", label: "volkswagen" },
    { value: "Aston Martin", label: "Aston Martin" },
    { value: "mitsubishi", label: "mitsubishi" },
    { value: "hyundai", label: "hyundai" },
    { value: "fiat", label: "fiat" },
  ];
  function logChange(val) {
    console.log("Selected: " + JSON.stringify(val));
  }

  return (
    <div>
      <Select
        classNamePrefix="background"
        name="form-field-name"
        options={optionsGroupOptionMutipleSelect}
        onChange={logChange}
      />
    </div>
  );
}
//Singleselect1
export function Singleselect1() {
  const objectArraysingle = [
    { value: "First", label: "Group 1" },
    { value: "Second", label: "Group 1" },
    { value: "Third", label: "Group 1" },
    { value: "Fourth", label: "Group 2" },
  ];
  const [selected, setSelected] = useState([]);
  return (
    <MultiSelect
      value={selected}
      onChange={setSelected}
      labelledBy="Select"
      disableSearch="true"
      options={objectArraysingle} />
  );
}
//CustomStyle
export function CustomStyle() {
  const [selected, setSelected] = useState([]);
  const options = [
    {
      value: "Group1",
      label: "Brand",
    },
    {
      value: "Group1",
      label: "fiat",
    },
    {
      value: "Group1",
      label: "hyundai",
    },
    {
      value: "Group2",
      label: "Aston Martin",
    },
    {
      value: "Group2",
      label: "volkswagen",
    },
    {
      value: "Group2",
      label: "BMW",
    },
    {
      value: "Group2",
      label: "Audi",
    },
  ]
  return (
    <MultiSelect
      value={selected}
      onChange={setSelected}
      labelledBy="Select"
      disableSearch="true"
      options={options}
      shouldToggleOnHover="true"
    />
  );
}
//Selectfilter
export function Selectfilter() {
  const optionsSelectfilter = [
    {
      label: "Group 1",
      options: [
        { label: "Group 1, option 1", value: "value_1" },
        { label: "Group 1, option 2", value: "value_2" },
      ],
    },
    { label: "A root option", value: "value_3" },
    { label: "Another root option", value: "value_4" },
  ];
  return (
    <Select
      isMulti
      classNamePrefix="background"
      options={optionsSelectfilter}
    />
  );
}
//DisablePreselected
export function DisablePreselected() {
  const [selected, setSelected] = useState([]);
  const options = [
    {
      value: "Group 1",
      label: " Brand",
    },
    {
      value: "Group 1",
      label: "BMW",
    },
    {
      value: "Group 1",
      label: "volkswagen",
    },
    {
      value: "Group 2",
      label: "Audi",
    },
    {
      value: "Group 2",
      label: "hyundai",
    },
    {
      value: "Group 2",
      label: "fiat",
    },
    {
      value: "Group 2",
      label: "Tatat",
    },
  ]
  return (
    <MultiSelect
      value={selected}
      onChange={setSelected}
      labelledBy="Select"
      disableSearch="true"
      options={options} />
  );
}

//TransferList1
function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

function union(a, b) {
  return [...a, ...not(b, a)];
}
export function TransferList1() {
  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState([0, 1, 2, 3]);
  const [right, setRight] = React.useState([4, 5, 6, 7]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = (items) => intersection(checked, items).length;

  const handleToggleAll = (items) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const customList = (title, items) => (
    <Card className="border">
      <Divider />
      <List
        sx={{
          width: 400,
          height: 230,
          bgcolor: "background.paper",
          overflow: "auto",
        }}
        dense
        component="div"
        role="list"
      >
        {items.map((value) => {
          const labelId = `transfer-list-all-item-${value}-label`;

          return (
            <ListItem
              key={value}
              role="listitem"
              button
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText id={labelId} primary={`List item ${value + 1}`} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Card>
  );

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item>{customList("Choices", left)}</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
          >
            &gt;
          </Button>
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            &lt;
          </Button>
        </Grid>
      </Grid>
      <Grid item>{customList("Chosen", right)}</Grid>
    </Grid>
  );
}

//AnimatedMultisingle
const animatedComponents = makeAnimated();
const Optionssingle = [
  { value: "Choose one", label: "Choose one (with optgroup)" },
  { value: "Mountain Time Zone", label: "Mountain Time Zone" },
  { value: "Mountain Time Zone", label: "Mountain Time Zone" },
  { value: "Colorado", label: "Idaho" },
  { value: "Montana<", label: "Montana" },
  { value: "Utah", label: "Utah" },
  { value: "Wyoming", label: "Wyoming" },
  { value: "Mountain Time Zone", label: "Mountain Time Zone" },
  { value: "Mountain Time Zone", label: "Mountain Time Zone" },
  { value: "Colorado", label: "Idaho" },
  { value: "Montana<", label: "Montana" },
  { value: "Utah", label: "Utah" },
  { value: "Wyoming", label: "Wyoming" },
  { value: "Mountain Time Zone", label: "Mountain Time Zone" },
  { value: "Mountain Time Zone", label: "Mountain Time Zone" },
  { value: "Colorado", label: "Idaho" },
  { value: "Montana<", label: "Montana" },
  { value: "Utah", label: "Utah" },
  { value: "Wyoming", label: "Wyoming" },
];
export function AnimatedMultisingle() {
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={Optionssingle}
    />
  );
}

// //OptgroupSupport
const optionOptgroupSupport = [
  { label: "Audi", value: "Audi" },
  { value: "BMW", label: "BMW" },
  { value: "volkswagen", label: "volkswagen" },
  { value: "Aston Martin", label: "Aston Martin" },
  { value: "mitsubishi", label: "mitsubishi" },
  { value: "hyundai", label: "hyundai" },
  { value: "fiat", label: "fiat" },
];
const objectArray = [
  { value: "BMW", selected: "true", label: "BMW" },
  { value: "volkswagen", label: "volkswagen" },
  { value: "Aston Martin", label: "Aston Martin" },
  { value: "mitsubishi", label: "mitsubishi" },
  { value: "hyundai", label: "hyundai" },
  { value: "fiat", label: "fiat" },
];
const groupedOptions = [
  {
    label: "BMW",
    options: objectArray,
  },
  {
    label: "volkswagen",
    options: optionOptgroupSupport,
  },
];
export const OptgroupSupport = () => {
  const [selected, setSelected] = useState([]);

  return (
    <div>
      <Creatable
        classNamePrefix="background"
        display="value"
        options={groupedOptions}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
    </div>
  );
};

//MultipleSelect2
export const MultipleSelect2 = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  function onChange(value, event) {
    if (event.action === "select-option" && event.option.value === "*") {
      this.setState(this.options);
    } else if (
      event.action === "deselect-option" &&
      event.option.value === "*"
    ) {
      this.setState([]);
    } else if (event.action === "deselect-option") {
      this.setState(value.filter((o) => o.value !== "*"));
    } else if (value.length === this.options.length - 1) {
      this.setState(this.options);
    } else {
      this.setState(value);
    }
  }
  const optionsMultipleSelect2 = [
    { value: "Choose one", label: "Chuck Testa" },
    { value: "1", label: "Sage Cattabriga-Alosa" },
    { value: "3", label: "Nikola Tesla" },
    { value: "Cattabriga-Alosa", label: "Cattabriga-Alosa" },
    { value: "Sage Cattabriga-Alosa", label: "Sage Cattabriga-Alosa" },
    { value: "Nikola Alosa", label: "Nikola Alosa" },
    { value: "Cattabriga-Alosa", label: "Cattabriga-Alosa" },
  ];
  return (
    <ReactMultiSelectCheckboxes
      width="100%"
      options={[{ label: "All", value: "*" }, ...optionsMultipleSelect2]}
      placeholderButtonLabel="Select Here"
      value={selectedOptions}
      onChange={onChange}
      setState={setSelectedOptions}
    />
  );
};

// //SearchSelect13
const option13s = [
  { value: "Audi", label: "Audi" },
  { value: "BMW", label: "BMW" },
  { value: "volkswagen", label: "volkswagen", isDisabled: true },
  { value: "Aston Martin", label: "Aston Martin" },
  { value: "mitsubishi", label: "mitsubishi" },
  { value: "hyundai", label: "hyundai" },
  { value: "fiat", label: "fiat" },
];
export const SearchSelect13 = () => {
  const [selected, setSelected] = useState([]);

  return (
    <div>
      <Creatable
        classNamePrefix="background"
        isMulti
        display="value"
        options={option13s}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
    </div>
  );
};

// //SearchSelect45
const option3s = [
  { value: "Audi", label: "Audi" },
  { value: "BMW", label: "BMW", isDisabled: true },
  { value: "volkswagen", label: "volkswagen" },
  { value: "Aston Martin", label: "Aston Martin" },
  { value: "mitsubishi", label: "mitsubishi" },
  { value: "hyundai", label: "hyundai", isDisabled: true },
  { value: "fiat", label: "fiat" },
];
const option3ss = [
  { value: "Audi", label: "Audi" },
  { value: "BMW", label: "BMW", isDisabled: true },
  { value: "volkswagen", label: "volkswagen" },
  { value: "Aston Martin", label: "Aston Martin" },
  { value: "mitsubishi", label: "mitsubishi" },
  { value: "hyundai", label: "hyundai", isDisabled: true },
  { value: "fiat", label: "fiat" },
];
const groupedOptions3ss = [
  {
    label: "BMW",
    options: option3s,
  },
  {
    label: "volkswagen",
    options: option3ss,
  },
];

export const SearchSelect45 = () => {
  const [selected, setSelected] = useState([]);

  return (
    <div>
      <Creatable
        classNamePrefix="background"
        isMulti
        display="value"
        options={groupedOptions3ss}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
    </div>
  );
};


//SearchSelect22
const groupedOptionsqa = [
  { value: "Audi", label: "Audi" },
  { value: "BMW", label: "BMW" },
  { value: "volkswagen", label: "volkswagen" },
  { value: "Aston Martin", label: "Aston Martin" },
  { value: "mitsubishi", label: "mitsubishi" },
  { value: "hyundai", label: "hyundai" },
  { value: "fiat", label: "fiat" },
];
export const SearchSelect22 = () => {
  const [selected, setSelected] = useState([]);
  return (
    <div>
      <Creatable
        classNamePrefix="background"
        display="value"
        options={groupedOptionsqa}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
        isSearchable="true"
      />
    </div>
  );
};

// //MultipleSelect1
const optionsMultipleSelect1 = [
  { value: "Audi", label: "Audi" },
  { value: "BMW", label: "BMW" },
  { value: "volkswagen", label: "volkswagen", disabled: "disabled" },
  { value: "Aston Martin", label: "Aston Martin" },
  { value: "mitsubishi", label: "mitsubishi" },
  { value: "hyundai", label: "hyundai" },
  { value: "fiat", label: "fiat" },
];
export const MultipleSelect1 = () => {
  const [selected, setSelected] = useState([]);
  return (
    <div>
      <MultiSelect
        options={optionsMultipleSelect1}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
        disableSearch="true"
      />
    </div>
  );
};

// //MultipleSelect22
const optionsMultipleSelect2 = [
  { value: "Audi", label: "Audi" },
  { value: "BMW", label: "BMW" },
  { value: "volkswagen", label: "volkswagen", disabled: "disabled" },
  { value: "Aston Martin", label: "Aston Martin" },
  { value: "mitsubishi", label: "mitsubishi" },
  { value: "hyundai", label: "hyundai" },
  { value: "fiat", label: "fiat" },
];
export const MultipleSelect22 = () => {
  const [selected, setSelected] = useState([]);
  return (
    <div>
      <MultiSelect
        options={optionsMultipleSelect2}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
    </div>
  );
};

// //Disabledselect
const optionsDisabledselect = [
  { value: "Audi", label: "Audi" },
  { value: "BMW", label: "BMW" },
  { value: "volkswagen", label: "volkswagen" },
  { value: "Aston Martin", label: "Aston Martin" },
  { value: "mitsubishi", label: "mitsubishi" },
  { value: "hyundai", label: "hyundai" },
  { value: "fiat", label: "fiat" },
];
export const Disabledselect = () => {
  const [selected, setSelected] = useState([]);
  return (
    <div>
      <MultiSelect
        options={optionsDisabledselect}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
        disableSearch="true"
        disabled="true"
      />
    </div>
  );
};

// //Disabledselect1
const optionsDisabledselect1 = [
  { value: "Audi", label: "Audi" },
  { value: "BMW", label: "BMW" },
  { value: "volkswagen", label: "volkswagen" },
  { value: "Aston Martin", label: "Aston Martin" },
  { value: "mitsubishi", label: "mitsubishi" },
  { value: "hyundai", label: "hyundai" },
  { value: "fiat", label: "fiat" },
];
export const Disabledselect1 = () => {
  const [selected, setSelected] = useState([]);
  return (
    <div>
      <MultiSelect
        options={optionsDisabledselect1}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
        disableSearch="true"
        disabled="true"
      />
    </div>
  );
};

// //MultipleSelect3
const optionsMultipleSelect3 = [
  { value: "Audi", label: "Audi" },
  { value: "BMW", label: "BMW" },
  { value: "volkswagen", label: "volkswagen" },
  { value: "Aston Martin", label: "Aston Martin" },
  { value: "mitsubishi", label: "mitsubishi" },
  { value: "hyundai", label: "hyundai" },
  { value: "fiat", label: "fiat" },
];
export const MultipleSelect3 = () => {
  const [selected, setSelected] = useState([]);
  return (
    <div>
      <MultiSelect
        options={optionsMultipleSelect3}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
        disableSearch="true"
        hasSelectAll={false}
      />
    </div>
  );
};
//Selectyear
export function Selectyear() {
  const [value, setvalue] = useState("");

  const handleOnchange = () => {
    setvalue(value);
  };
  const optionselectyear = [
    {
      value: "Group-1",
      label: "Select Year",
    },
    {
      value: "Group-2",
      label: "2021",
    },
    {
      value: "Group-3",
      label: "2020",
    },
    {
      value: "Group-4",
      label: "2019",
    },
    {
      value: "Group-5",
      label: "2018",
    },
    {
      value: "Group-6",
      label: "2017",
    },
    {
      value: "Group-7",
      label: "2016",
    },
    {
      value: "Group-8",
      label: "2015",
    },
    {
      value: "Group-9",
      label: "2014",
    },
    {
      value: "Group-10",
      label: "2013",
    },
    {
      value: "Group-11",
      label: "2012",
    },
    {
      value: "Group-12",
      label: "2011",
    },
  ];
  return (
    <MultiSelect
      className="farms"
      displayValue="key"
      id="optionselectyear"
      onChange={handleOnchange}
      placeholder="--Select--"
      singleSelect="true"
      options={optionselectyear}
    />
  );
}

//Selectdate
export function Selectdate() {
  const [value, setvalue] = useState("");

  const handleOnchange = () => {
    setvalue(value);
  };
  const optionselectdate = [
    {
      value: "Group-1",
      label: "Select Day",
    },
    {
      value: "Group-2",
      label: "1",
    },
    {
      value: "Group-3",
      label: "2",
    },
    {
      value: "Group-4",
      label: "3",
    },
    {
      value: "Group-5",
      label: "4",
    },
    {
      value: "Group-6",
      label: "5",
    },
    {
      value: "Group-7",
      label: "6",
    },
    {
      value: "Group-8",
      label: "7",
    },
    {
      value: "Group-9",
      label: "8",
    },
    {
      value: "Group-10",
      label: "9",
    },
    {
      value: "Group-11",
      label: "10",
    },
    {
      value: "Group-12",
      label: "11",
    },
    {
      value: "Group-13",
      label: "12",
    },
    {
      value: "Group-14",
      label: "13",
    },
    {
      value: "Group-15",
      label: "14",
    },
    {
      value: "Group-16",
      label: "15",
    },
    {
      value: "Group-17",
      label: "16",
    },
    {
      value: "Group-18",
      label: "17",
    },
    {
      value: "Group-19",
      label: "18",
    },
    {
      value: "Group-20",
      label: "19",
    },
    {
      value: "Group-21",
      label: "20",
    },
    {
      value: "Group-22",
      label: "21",
    },
    {
      value: "Group-23",
      label: "22",
    },
    {
      value: "Group-24",
      label: "23",
    },
    {
      value: "Group-25",
      label: "24",
    },
    {
      value: "Group-26",
      label: "25",
    },
    {
      value: "Group-27",
      label: "26",
    },
    {
      value: "Group-28",
      label: "27",
    },
    {
      value: "Group-29",
      label: "28",
    },
    {
      value: "Group-30",
      label: "29",
    },
    {
      value: "Group-31",
      label: "30",
    },
  ];
  return (
    <MultiSelect
      className="farms mb-1"
      displayValue="key"
      id="optionselectdate"
      singleSelect="true"
      onChange={handleOnchange}
      placeholder="--Select--"
      options={optionselectdate}
    />
  );
}
//Dateofbirth
export function Dateofbirth() {
  const [value, setvalue] = useState("");

  const handleOnchange = () => {
    setvalue(value);
  };
  const optionDateofbirth = [
    {
      value: "Group-1",
      label: "Select Month",
    },
    {
      value: "Group-2",
      label: "January",
    },
    {
      value: "Group-3",
      label: "February",
    },
    {
      value: "Group-4",
      label: "March",
    },
    {
      value: "Group-5",
      label: "April",
    },
    {
      value: "Group-6",
      label: "May",
    },
    {
      value: "Group-7",
      label: "June",
    },
    {
      value: "Group-8",
      label: "July",
    },
    {
      value: "Group-9",
      label: "August",
    },
    {
      value: "Group-10",
      label: "September",
    },
    {
      value: "Group-11",
      label: "October",
    },
    {
      value: "Group-12",
      label: "November",
    },
    {
      value: "Group-13",
      label: "December",
    },
  ];
  return (
    <MultiSelect
      className="farms mb-1"
      displayValue="key"
      id="optionDateofbirth"
      onChange={handleOnchange}
      placeholder="--Select--"
      singleSelect="true"
      options={optionDateofbirth}
    />
  );
}
//Country
export function Country() {
  const optinsingleselect = [
    {
      value: "Group-1",
      label: "Select Country",
    },
    {
      value: "Group-2",
      label: "Brazil",
    },
    {
      value: "Group-3",
      label: "Czech Republic",
    },
    {
      value: "Group-4",
      label: "Germany",
    },
    {
      value: "Group-5",
      label: "pl Poland",
    },
  ];
  const [value, setvalue] = useState("");

  const handleOnchange = () => {
    setvalue(value);
  };
  return (
    <MultiSelect
      className="farm"
      displayValue="key"
      id="optinsingleselect"
      onChange={handleOnchange}
      placeholder="--Select--"
      singleSelect="true"
      options={optinsingleselect}
    />
  );
}
//InputSelect
export function InputSelect() {
  const [value, setvalue] = useState("");

  const handleOnchange = () => {
    setvalue(value);
  };
  const optioninputselect = [
    {
      value: "Group-1",
      label: "Select",
    },
    {
      value: "Group-2",
      label: "Apple",
    },
    {
      value: "Group-3",
      label: "Orange",
    },
    {
      value: "Group-4",
      label: "Mango",
    },
    {
      value: "Group-5",
      label: "Grapes",
    },
    {
      value: "Group-6",
      label: "Banana",
    },


  ];
  return (
    <MultiSelect
      className=" select2"
      displayValue="key"
      id="Inputselectoption"
      onChange={handleOnchange}
      placeholder="--Select--"
      singleSelect="true"
      options={optioninputselect}
    />
  );
}
//BillingInformationCounrty
export function BillingInformationCounrty() {
  const [value, setvalue] = useState("");

  const handleOnchange = () => {
    setvalue(value);
  };
  const optionCounrty = [
    {
      value: "Group-1",
      label: "Select Country",
    },
    {
      value: "Group-2",
      label: "Germany",
    },
    {
      value: "Group-3",
      label: "Canada",
    },
    {
      value: "Group-4",
      label: "Usa",
    },
    {
      value: "Group-5",
      label: "India",
    },
    {
      value: "Group-6",
      label: "Uk",
    },
  ];
  return (
    <MultiSelect
      className="farm"
      displayValue="key"
      id="optionCounrty"
      onChange={handleOnchange}
      placeholder="--Select--"
      singleSelect="true"
      options={optionCounrty}
    />
  );
}