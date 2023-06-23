import { VariableBoolean } from "./types/VariableBoolean";
import { VariableNumber } from "./types/VariableNumber";
import { VariableString } from "./types/VariableString";
import { IVariableDefinition } from "./VariableTypes"
import { VariableType, isVariableType, DeviceVar, VarCategory, convertVarValueToType, variableTypeDefaults } from "./VariableTypes";
export { VariableType, isVariableType, DeviceVar, VarCategory, convertVarValueToType, variableTypeDefaults };

import { ArrayOfValues, PredefinedVariableName, VarValue, VarsMap, predefinedVariableDefaults, predefinedVariableIdToName } from "./VariableTypes";
export { ArrayOfValues, PredefinedVariableName, VarValue, VarsMap, predefinedVariableDefaults, predefinedVariableIdToName };

export const variableTypeToDefn: Record<VariableType, IVariableDefinition> = {
  [VariableType.boolean]: VariableBoolean,
  [VariableType.number]: VariableNumber,
  [VariableType.string]: VariableString,
};
