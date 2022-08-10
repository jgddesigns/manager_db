
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.1.0
 * Query Engine version: 8d8414deb360336e4698a65aa45a1fbaf1ce13d8
 */
Prisma.prismaVersion = {
  client: "4.1.0",
  engine: "8d8414deb360336e4698a65aa45a1fbaf1ce13d8"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.Audit_superiorScalarFieldEnum = makeEnum({
  id: 'id',
  changed_by_number: 'changed_by_number',
  changed_employee: 'changed_employee',
  changed_employee_role: 'changed_employee_role',
  changed_employee_efis: 'changed_employee_efis',
  old_superior_name: 'old_superior_name',
  old_superior_efis: 'old_superior_efis',
  new_superior_name: 'new_superior_name',
  new_superior_efis: 'new_superior_efis',
  changed_on_date: 'changed_on_date'
});

exports.Prisma.Audit_tableScalarFieldEnum = makeEnum({
  id: 'id',
  change_type: 'change_type',
  changed_by_number: 'changed_by_number',
  old_name: 'old_name',
  new_name: 'new_name',
  old_email: 'old_email',
  new_email: 'new_email',
  role: 'role',
  efis: 'efis',
  region: 'region',
  date_time: 'date_time'
});

exports.Prisma.Manager_dashboard_tblScalarFieldEnum = makeEnum({
  REGION: 'REGION',
  DISTRICT: 'DISTRICT',
  TRAM: 'TRAM',
  EFIS: 'EFIS',
  DEPUTY_NAME: 'DEPUTY_NAME',
  DEPUTY_EMAIL: 'DEPUTY_EMAIL',
  PRIN_UNIT: 'PRIN_UNIT',
  PRIN_EFIS: 'PRIN_EFIS',
  PRIN_NAME: 'PRIN_NAME',
  PRIN_EMAIL: 'PRIN_EMAIL',
  CHIEF_UNIT: 'CHIEF_UNIT',
  CHIEF_EFIS: 'CHIEF_EFIS',
  CHIEF_NAME: 'CHIEF_NAME',
  CHIEF_EMAIL: 'CHIEF_EMAIL',
  STE_UNIT: 'STE_UNIT',
  STE_EFIS: 'STE_EFIS',
  STE_NAME: 'STE_NAME',
  STE_EMAIL: 'STE_EMAIL',
  manager_dashboard_id: 'manager_dashboard_id'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});


exports.Prisma.ModelName = makeEnum({
  audit_superior: 'audit_superior',
  audit_table: 'audit_table',
  manager_dashboard_tbl: 'manager_dashboard_tbl'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
