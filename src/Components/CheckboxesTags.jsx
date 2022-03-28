import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';


const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CheckboxesTags ({id, data, placeholder, label, setSelectedTags}) {
    const onTagsChange = (event, values) => {
        id !== null && id !== undefined ? setSelectedTags(values, id) : setSelectedTags(values)
      }
  return (
    <Autocomplete
    onChange={onTagsChange}
      multiple
      id="checkboxes-tags-demo"
      options={data}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.title}
        </li>
      )}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} label={label} placeholder={placeholder} />
      )}
    />
  );
}