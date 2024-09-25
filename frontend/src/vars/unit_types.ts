// unit state 
const default_unit_types = {
  'length': { active: true },
  'weight': { active: false },
  'temperature': { active: false }
}
const inactive_unit_types = {
  'length': { active: false },
  'weight': { active: false },
  'temperature': { active: false }
}

export { default_unit_types, inactive_unit_types }
