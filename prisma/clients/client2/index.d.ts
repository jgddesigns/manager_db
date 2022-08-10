
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model audit_superior
 * 
 */
export type audit_superior = {
  id: number
  changed_by_number: string | null
  changed_employee: string | null
  changed_employee_role: string | null
  changed_employee_efis: string | null
  old_superior_name: string | null
  old_superior_efis: string | null
  new_superior_name: string | null
  new_superior_efis: string | null
  changed_on_date: string | null
}

/**
 * Model audit_table
 * 
 */
export type audit_table = {
  id: number
  change_type: string | null
  changed_by_number: string | null
  old_name: string
  new_name: string
  old_email: string
  new_email: string
  role: string | null
  efis: string | null
  region: string
  date_time: string | null
}

/**
 * Model manager_dashboard_tbl
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by the Prisma Client.
 */
export type manager_dashboard_tbl = {
  REGION: string | null
  DISTRICT: string | null
  TRAM: string | null
  EFIS: string | null
  DEPUTY_NAME: string | null
  DEPUTY_EMAIL: string | null
  PRIN_UNIT: string | null
  PRIN_EFIS: string | null
  PRIN_NAME: string | null
  PRIN_EMAIL: string | null
  CHIEF_UNIT: string | null
  CHIEF_EFIS: string | null
  CHIEF_NAME: string | null
  CHIEF_EMAIL: string | null
  STE_UNIT: string | null
  STE_EFIS: string | null
  STE_NAME: string | null
  STE_EMAIL: string | null
  manager_dashboard_id: number
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Audit_superiors
 * const audit_superiors = await prisma.audit_superior.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Audit_superiors
   * const audit_superiors = await prisma.audit_superior.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.audit_superior`: Exposes CRUD operations for the **audit_superior** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Audit_superiors
    * const audit_superiors = await prisma.audit_superior.findMany()
    * ```
    */
  get audit_superior(): Prisma.audit_superiorDelegate<GlobalReject>;

  /**
   * `prisma.audit_table`: Exposes CRUD operations for the **audit_table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Audit_tables
    * const audit_tables = await prisma.audit_table.findMany()
    * ```
    */
  get audit_table(): Prisma.audit_tableDelegate<GlobalReject>;

  /**
   * `prisma.manager_dashboard_tbl`: Exposes CRUD operations for the **manager_dashboard_tbl** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Manager_dashboard_tbls
    * const manager_dashboard_tbls = await prisma.manager_dashboard_tbl.findMany()
    * ```
    */
  get manager_dashboard_tbl(): Prisma.manager_dashboard_tblDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.1.0
   * Query Engine version: 8d8414deb360336e4698a65aa45a1fbaf1ce13d8
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    audit_superior: 'audit_superior',
    audit_table: 'audit_table',
    manager_dashboard_tbl: 'manager_dashboard_tbl'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model audit_superior
   */


  export type AggregateAudit_superior = {
    _count: Audit_superiorCountAggregateOutputType | null
    _avg: Audit_superiorAvgAggregateOutputType | null
    _sum: Audit_superiorSumAggregateOutputType | null
    _min: Audit_superiorMinAggregateOutputType | null
    _max: Audit_superiorMaxAggregateOutputType | null
  }

  export type Audit_superiorAvgAggregateOutputType = {
    id: number | null
  }

  export type Audit_superiorSumAggregateOutputType = {
    id: number | null
  }

  export type Audit_superiorMinAggregateOutputType = {
    id: number | null
    changed_by_number: string | null
    changed_employee: string | null
    changed_employee_role: string | null
    changed_employee_efis: string | null
    old_superior_name: string | null
    old_superior_efis: string | null
    new_superior_name: string | null
    new_superior_efis: string | null
    changed_on_date: string | null
  }

  export type Audit_superiorMaxAggregateOutputType = {
    id: number | null
    changed_by_number: string | null
    changed_employee: string | null
    changed_employee_role: string | null
    changed_employee_efis: string | null
    old_superior_name: string | null
    old_superior_efis: string | null
    new_superior_name: string | null
    new_superior_efis: string | null
    changed_on_date: string | null
  }

  export type Audit_superiorCountAggregateOutputType = {
    id: number
    changed_by_number: number
    changed_employee: number
    changed_employee_role: number
    changed_employee_efis: number
    old_superior_name: number
    old_superior_efis: number
    new_superior_name: number
    new_superior_efis: number
    changed_on_date: number
    _all: number
  }


  export type Audit_superiorAvgAggregateInputType = {
    id?: true
  }

  export type Audit_superiorSumAggregateInputType = {
    id?: true
  }

  export type Audit_superiorMinAggregateInputType = {
    id?: true
    changed_by_number?: true
    changed_employee?: true
    changed_employee_role?: true
    changed_employee_efis?: true
    old_superior_name?: true
    old_superior_efis?: true
    new_superior_name?: true
    new_superior_efis?: true
    changed_on_date?: true
  }

  export type Audit_superiorMaxAggregateInputType = {
    id?: true
    changed_by_number?: true
    changed_employee?: true
    changed_employee_role?: true
    changed_employee_efis?: true
    old_superior_name?: true
    old_superior_efis?: true
    new_superior_name?: true
    new_superior_efis?: true
    changed_on_date?: true
  }

  export type Audit_superiorCountAggregateInputType = {
    id?: true
    changed_by_number?: true
    changed_employee?: true
    changed_employee_role?: true
    changed_employee_efis?: true
    old_superior_name?: true
    old_superior_efis?: true
    new_superior_name?: true
    new_superior_efis?: true
    changed_on_date?: true
    _all?: true
  }

  export type Audit_superiorAggregateArgs = {
    /**
     * Filter which audit_superior to aggregate.
     * 
    **/
    where?: audit_superiorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_superiors to fetch.
     * 
    **/
    orderBy?: Enumerable<audit_superiorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: audit_superiorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_superiors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_superiors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned audit_superiors
    **/
    _count?: true | Audit_superiorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Audit_superiorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Audit_superiorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Audit_superiorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Audit_superiorMaxAggregateInputType
  }

  export type GetAudit_superiorAggregateType<T extends Audit_superiorAggregateArgs> = {
        [P in keyof T & keyof AggregateAudit_superior]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudit_superior[P]>
      : GetScalarType<T[P], AggregateAudit_superior[P]>
  }




  export type Audit_superiorGroupByArgs = {
    where?: audit_superiorWhereInput
    orderBy?: Enumerable<audit_superiorOrderByWithAggregationInput>
    by: Array<Audit_superiorScalarFieldEnum>
    having?: audit_superiorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Audit_superiorCountAggregateInputType | true
    _avg?: Audit_superiorAvgAggregateInputType
    _sum?: Audit_superiorSumAggregateInputType
    _min?: Audit_superiorMinAggregateInputType
    _max?: Audit_superiorMaxAggregateInputType
  }


  export type Audit_superiorGroupByOutputType = {
    id: number
    changed_by_number: string | null
    changed_employee: string | null
    changed_employee_role: string | null
    changed_employee_efis: string | null
    old_superior_name: string | null
    old_superior_efis: string | null
    new_superior_name: string | null
    new_superior_efis: string | null
    changed_on_date: string | null
    _count: Audit_superiorCountAggregateOutputType | null
    _avg: Audit_superiorAvgAggregateOutputType | null
    _sum: Audit_superiorSumAggregateOutputType | null
    _min: Audit_superiorMinAggregateOutputType | null
    _max: Audit_superiorMaxAggregateOutputType | null
  }

  type GetAudit_superiorGroupByPayload<T extends Audit_superiorGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Audit_superiorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Audit_superiorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Audit_superiorGroupByOutputType[P]>
            : GetScalarType<T[P], Audit_superiorGroupByOutputType[P]>
        }
      >
    >


  export type audit_superiorSelect = {
    id?: boolean
    changed_by_number?: boolean
    changed_employee?: boolean
    changed_employee_role?: boolean
    changed_employee_efis?: boolean
    old_superior_name?: boolean
    old_superior_efis?: boolean
    new_superior_name?: boolean
    new_superior_efis?: boolean
    changed_on_date?: boolean
  }

  export type audit_superiorGetPayload<
    S extends boolean | null | undefined | audit_superiorArgs,
    U = keyof S
      > = S extends true
        ? audit_superior
    : S extends undefined
    ? never
    : S extends audit_superiorArgs | audit_superiorFindManyArgs
    ?'include' extends U
    ? audit_superior 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof audit_superior ? audit_superior[P] : never
  } 
    : audit_superior
  : audit_superior


  type audit_superiorCountArgs = Merge<
    Omit<audit_superiorFindManyArgs, 'select' | 'include'> & {
      select?: Audit_superiorCountAggregateInputType | true
    }
  >

  export interface audit_superiorDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Audit_superior that matches the filter.
     * @param {audit_superiorFindUniqueArgs} args - Arguments to find a Audit_superior
     * @example
     * // Get one Audit_superior
     * const audit_superior = await prisma.audit_superior.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends audit_superiorFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, audit_superiorFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'audit_superior'> extends True ? CheckSelect<T, Prisma__audit_superiorClient<audit_superior>, Prisma__audit_superiorClient<audit_superiorGetPayload<T>>> : CheckSelect<T, Prisma__audit_superiorClient<audit_superior | null >, Prisma__audit_superiorClient<audit_superiorGetPayload<T> | null >>

    /**
     * Find the first Audit_superior that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_superiorFindFirstArgs} args - Arguments to find a Audit_superior
     * @example
     * // Get one Audit_superior
     * const audit_superior = await prisma.audit_superior.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends audit_superiorFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, audit_superiorFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'audit_superior'> extends True ? CheckSelect<T, Prisma__audit_superiorClient<audit_superior>, Prisma__audit_superiorClient<audit_superiorGetPayload<T>>> : CheckSelect<T, Prisma__audit_superiorClient<audit_superior | null >, Prisma__audit_superiorClient<audit_superiorGetPayload<T> | null >>

    /**
     * Find zero or more Audit_superiors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_superiorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Audit_superiors
     * const audit_superiors = await prisma.audit_superior.findMany()
     * 
     * // Get first 10 Audit_superiors
     * const audit_superiors = await prisma.audit_superior.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const audit_superiorWithIdOnly = await prisma.audit_superior.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends audit_superiorFindManyArgs>(
      args?: SelectSubset<T, audit_superiorFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<audit_superior>>, PrismaPromise<Array<audit_superiorGetPayload<T>>>>

    /**
     * Create a Audit_superior.
     * @param {audit_superiorCreateArgs} args - Arguments to create a Audit_superior.
     * @example
     * // Create one Audit_superior
     * const Audit_superior = await prisma.audit_superior.create({
     *   data: {
     *     // ... data to create a Audit_superior
     *   }
     * })
     * 
    **/
    create<T extends audit_superiorCreateArgs>(
      args: SelectSubset<T, audit_superiorCreateArgs>
    ): CheckSelect<T, Prisma__audit_superiorClient<audit_superior>, Prisma__audit_superiorClient<audit_superiorGetPayload<T>>>

    /**
     * Create many Audit_superiors.
     *     @param {audit_superiorCreateManyArgs} args - Arguments to create many Audit_superiors.
     *     @example
     *     // Create many Audit_superiors
     *     const audit_superior = await prisma.audit_superior.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends audit_superiorCreateManyArgs>(
      args?: SelectSubset<T, audit_superiorCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Audit_superior.
     * @param {audit_superiorDeleteArgs} args - Arguments to delete one Audit_superior.
     * @example
     * // Delete one Audit_superior
     * const Audit_superior = await prisma.audit_superior.delete({
     *   where: {
     *     // ... filter to delete one Audit_superior
     *   }
     * })
     * 
    **/
    delete<T extends audit_superiorDeleteArgs>(
      args: SelectSubset<T, audit_superiorDeleteArgs>
    ): CheckSelect<T, Prisma__audit_superiorClient<audit_superior>, Prisma__audit_superiorClient<audit_superiorGetPayload<T>>>

    /**
     * Update one Audit_superior.
     * @param {audit_superiorUpdateArgs} args - Arguments to update one Audit_superior.
     * @example
     * // Update one Audit_superior
     * const audit_superior = await prisma.audit_superior.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends audit_superiorUpdateArgs>(
      args: SelectSubset<T, audit_superiorUpdateArgs>
    ): CheckSelect<T, Prisma__audit_superiorClient<audit_superior>, Prisma__audit_superiorClient<audit_superiorGetPayload<T>>>

    /**
     * Delete zero or more Audit_superiors.
     * @param {audit_superiorDeleteManyArgs} args - Arguments to filter Audit_superiors to delete.
     * @example
     * // Delete a few Audit_superiors
     * const { count } = await prisma.audit_superior.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends audit_superiorDeleteManyArgs>(
      args?: SelectSubset<T, audit_superiorDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audit_superiors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_superiorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Audit_superiors
     * const audit_superior = await prisma.audit_superior.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends audit_superiorUpdateManyArgs>(
      args: SelectSubset<T, audit_superiorUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Audit_superior.
     * @param {audit_superiorUpsertArgs} args - Arguments to update or create a Audit_superior.
     * @example
     * // Update or create a Audit_superior
     * const audit_superior = await prisma.audit_superior.upsert({
     *   create: {
     *     // ... data to create a Audit_superior
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Audit_superior we want to update
     *   }
     * })
    **/
    upsert<T extends audit_superiorUpsertArgs>(
      args: SelectSubset<T, audit_superiorUpsertArgs>
    ): CheckSelect<T, Prisma__audit_superiorClient<audit_superior>, Prisma__audit_superiorClient<audit_superiorGetPayload<T>>>

    /**
     * Find one Audit_superior that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {audit_superiorFindUniqueOrThrowArgs} args - Arguments to find a Audit_superior
     * @example
     * // Get one Audit_superior
     * const audit_superior = await prisma.audit_superior.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends audit_superiorFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, audit_superiorFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__audit_superiorClient<audit_superior>, Prisma__audit_superiorClient<audit_superiorGetPayload<T>>>

    /**
     * Find the first Audit_superior that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_superiorFindFirstOrThrowArgs} args - Arguments to find a Audit_superior
     * @example
     * // Get one Audit_superior
     * const audit_superior = await prisma.audit_superior.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends audit_superiorFindFirstOrThrowArgs>(
      args?: SelectSubset<T, audit_superiorFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__audit_superiorClient<audit_superior>, Prisma__audit_superiorClient<audit_superiorGetPayload<T>>>

    /**
     * Count the number of Audit_superiors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_superiorCountArgs} args - Arguments to filter Audit_superiors to count.
     * @example
     * // Count the number of Audit_superiors
     * const count = await prisma.audit_superior.count({
     *   where: {
     *     // ... the filter for the Audit_superiors we want to count
     *   }
     * })
    **/
    count<T extends audit_superiorCountArgs>(
      args?: Subset<T, audit_superiorCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Audit_superiorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Audit_superior.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Audit_superiorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Audit_superiorAggregateArgs>(args: Subset<T, Audit_superiorAggregateArgs>): PrismaPromise<GetAudit_superiorAggregateType<T>>

    /**
     * Group by Audit_superior.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Audit_superiorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Audit_superiorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Audit_superiorGroupByArgs['orderBy'] }
        : { orderBy?: Audit_superiorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Audit_superiorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAudit_superiorGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for audit_superior.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__audit_superiorClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * audit_superior base type for findUnique actions
   */
  export type audit_superiorFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the audit_superior
     * 
    **/
    select?: audit_superiorSelect | null
    /**
     * Filter, which audit_superior to fetch.
     * 
    **/
    where: audit_superiorWhereUniqueInput
  }

  /**
   * audit_superior: findUnique
   */
  export interface audit_superiorFindUniqueArgs extends audit_superiorFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * audit_superior base type for findFirst actions
   */
  export type audit_superiorFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the audit_superior
     * 
    **/
    select?: audit_superiorSelect | null
    /**
     * Filter, which audit_superior to fetch.
     * 
    **/
    where?: audit_superiorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_superiors to fetch.
     * 
    **/
    orderBy?: Enumerable<audit_superiorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for audit_superiors.
     * 
    **/
    cursor?: audit_superiorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_superiors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_superiors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of audit_superiors.
     * 
    **/
    distinct?: Enumerable<Audit_superiorScalarFieldEnum>
  }

  /**
   * audit_superior: findFirst
   */
  export interface audit_superiorFindFirstArgs extends audit_superiorFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * audit_superior findMany
   */
  export type audit_superiorFindManyArgs = {
    /**
     * Select specific fields to fetch from the audit_superior
     * 
    **/
    select?: audit_superiorSelect | null
    /**
     * Filter, which audit_superiors to fetch.
     * 
    **/
    where?: audit_superiorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_superiors to fetch.
     * 
    **/
    orderBy?: Enumerable<audit_superiorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing audit_superiors.
     * 
    **/
    cursor?: audit_superiorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_superiors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_superiors.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Audit_superiorScalarFieldEnum>
  }


  /**
   * audit_superior create
   */
  export type audit_superiorCreateArgs = {
    /**
     * Select specific fields to fetch from the audit_superior
     * 
    **/
    select?: audit_superiorSelect | null
    /**
     * The data needed to create a audit_superior.
     * 
    **/
    data: XOR<audit_superiorCreateInput, audit_superiorUncheckedCreateInput>
  }


  /**
   * audit_superior createMany
   */
  export type audit_superiorCreateManyArgs = {
    /**
     * The data used to create many audit_superiors.
     * 
    **/
    data: Enumerable<audit_superiorCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * audit_superior update
   */
  export type audit_superiorUpdateArgs = {
    /**
     * Select specific fields to fetch from the audit_superior
     * 
    **/
    select?: audit_superiorSelect | null
    /**
     * The data needed to update a audit_superior.
     * 
    **/
    data: XOR<audit_superiorUpdateInput, audit_superiorUncheckedUpdateInput>
    /**
     * Choose, which audit_superior to update.
     * 
    **/
    where: audit_superiorWhereUniqueInput
  }


  /**
   * audit_superior updateMany
   */
  export type audit_superiorUpdateManyArgs = {
    /**
     * The data used to update audit_superiors.
     * 
    **/
    data: XOR<audit_superiorUpdateManyMutationInput, audit_superiorUncheckedUpdateManyInput>
    /**
     * Filter which audit_superiors to update
     * 
    **/
    where?: audit_superiorWhereInput
  }


  /**
   * audit_superior upsert
   */
  export type audit_superiorUpsertArgs = {
    /**
     * Select specific fields to fetch from the audit_superior
     * 
    **/
    select?: audit_superiorSelect | null
    /**
     * The filter to search for the audit_superior to update in case it exists.
     * 
    **/
    where: audit_superiorWhereUniqueInput
    /**
     * In case the audit_superior found by the `where` argument doesn't exist, create a new audit_superior with this data.
     * 
    **/
    create: XOR<audit_superiorCreateInput, audit_superiorUncheckedCreateInput>
    /**
     * In case the audit_superior was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<audit_superiorUpdateInput, audit_superiorUncheckedUpdateInput>
  }


  /**
   * audit_superior delete
   */
  export type audit_superiorDeleteArgs = {
    /**
     * Select specific fields to fetch from the audit_superior
     * 
    **/
    select?: audit_superiorSelect | null
    /**
     * Filter which audit_superior to delete.
     * 
    **/
    where: audit_superiorWhereUniqueInput
  }


  /**
   * audit_superior deleteMany
   */
  export type audit_superiorDeleteManyArgs = {
    /**
     * Filter which audit_superiors to delete
     * 
    **/
    where?: audit_superiorWhereInput
  }


  /**
   * audit_superior: findUniqueOrThrow
   */
  export type audit_superiorFindUniqueOrThrowArgs = audit_superiorFindUniqueArgsBase
      

  /**
   * audit_superior: findFirstOrThrow
   */
  export type audit_superiorFindFirstOrThrowArgs = audit_superiorFindFirstArgsBase
      

  /**
   * audit_superior without action
   */
  export type audit_superiorArgs = {
    /**
     * Select specific fields to fetch from the audit_superior
     * 
    **/
    select?: audit_superiorSelect | null
  }



  /**
   * Model audit_table
   */


  export type AggregateAudit_table = {
    _count: Audit_tableCountAggregateOutputType | null
    _avg: Audit_tableAvgAggregateOutputType | null
    _sum: Audit_tableSumAggregateOutputType | null
    _min: Audit_tableMinAggregateOutputType | null
    _max: Audit_tableMaxAggregateOutputType | null
  }

  export type Audit_tableAvgAggregateOutputType = {
    id: number | null
  }

  export type Audit_tableSumAggregateOutputType = {
    id: number | null
  }

  export type Audit_tableMinAggregateOutputType = {
    id: number | null
    change_type: string | null
    changed_by_number: string | null
    old_name: string | null
    new_name: string | null
    old_email: string | null
    new_email: string | null
    role: string | null
    efis: string | null
    region: string | null
    date_time: string | null
  }

  export type Audit_tableMaxAggregateOutputType = {
    id: number | null
    change_type: string | null
    changed_by_number: string | null
    old_name: string | null
    new_name: string | null
    old_email: string | null
    new_email: string | null
    role: string | null
    efis: string | null
    region: string | null
    date_time: string | null
  }

  export type Audit_tableCountAggregateOutputType = {
    id: number
    change_type: number
    changed_by_number: number
    old_name: number
    new_name: number
    old_email: number
    new_email: number
    role: number
    efis: number
    region: number
    date_time: number
    _all: number
  }


  export type Audit_tableAvgAggregateInputType = {
    id?: true
  }

  export type Audit_tableSumAggregateInputType = {
    id?: true
  }

  export type Audit_tableMinAggregateInputType = {
    id?: true
    change_type?: true
    changed_by_number?: true
    old_name?: true
    new_name?: true
    old_email?: true
    new_email?: true
    role?: true
    efis?: true
    region?: true
    date_time?: true
  }

  export type Audit_tableMaxAggregateInputType = {
    id?: true
    change_type?: true
    changed_by_number?: true
    old_name?: true
    new_name?: true
    old_email?: true
    new_email?: true
    role?: true
    efis?: true
    region?: true
    date_time?: true
  }

  export type Audit_tableCountAggregateInputType = {
    id?: true
    change_type?: true
    changed_by_number?: true
    old_name?: true
    new_name?: true
    old_email?: true
    new_email?: true
    role?: true
    efis?: true
    region?: true
    date_time?: true
    _all?: true
  }

  export type Audit_tableAggregateArgs = {
    /**
     * Filter which audit_table to aggregate.
     * 
    **/
    where?: audit_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_tables to fetch.
     * 
    **/
    orderBy?: Enumerable<audit_tableOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: audit_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_tables from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_tables.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned audit_tables
    **/
    _count?: true | Audit_tableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Audit_tableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Audit_tableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Audit_tableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Audit_tableMaxAggregateInputType
  }

  export type GetAudit_tableAggregateType<T extends Audit_tableAggregateArgs> = {
        [P in keyof T & keyof AggregateAudit_table]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudit_table[P]>
      : GetScalarType<T[P], AggregateAudit_table[P]>
  }




  export type Audit_tableGroupByArgs = {
    where?: audit_tableWhereInput
    orderBy?: Enumerable<audit_tableOrderByWithAggregationInput>
    by: Array<Audit_tableScalarFieldEnum>
    having?: audit_tableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Audit_tableCountAggregateInputType | true
    _avg?: Audit_tableAvgAggregateInputType
    _sum?: Audit_tableSumAggregateInputType
    _min?: Audit_tableMinAggregateInputType
    _max?: Audit_tableMaxAggregateInputType
  }


  export type Audit_tableGroupByOutputType = {
    id: number
    change_type: string | null
    changed_by_number: string | null
    old_name: string
    new_name: string
    old_email: string
    new_email: string
    role: string | null
    efis: string | null
    region: string
    date_time: string | null
    _count: Audit_tableCountAggregateOutputType | null
    _avg: Audit_tableAvgAggregateOutputType | null
    _sum: Audit_tableSumAggregateOutputType | null
    _min: Audit_tableMinAggregateOutputType | null
    _max: Audit_tableMaxAggregateOutputType | null
  }

  type GetAudit_tableGroupByPayload<T extends Audit_tableGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Audit_tableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Audit_tableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Audit_tableGroupByOutputType[P]>
            : GetScalarType<T[P], Audit_tableGroupByOutputType[P]>
        }
      >
    >


  export type audit_tableSelect = {
    id?: boolean
    change_type?: boolean
    changed_by_number?: boolean
    old_name?: boolean
    new_name?: boolean
    old_email?: boolean
    new_email?: boolean
    role?: boolean
    efis?: boolean
    region?: boolean
    date_time?: boolean
  }

  export type audit_tableGetPayload<
    S extends boolean | null | undefined | audit_tableArgs,
    U = keyof S
      > = S extends true
        ? audit_table
    : S extends undefined
    ? never
    : S extends audit_tableArgs | audit_tableFindManyArgs
    ?'include' extends U
    ? audit_table 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof audit_table ? audit_table[P] : never
  } 
    : audit_table
  : audit_table


  type audit_tableCountArgs = Merge<
    Omit<audit_tableFindManyArgs, 'select' | 'include'> & {
      select?: Audit_tableCountAggregateInputType | true
    }
  >

  export interface audit_tableDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Audit_table that matches the filter.
     * @param {audit_tableFindUniqueArgs} args - Arguments to find a Audit_table
     * @example
     * // Get one Audit_table
     * const audit_table = await prisma.audit_table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends audit_tableFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, audit_tableFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'audit_table'> extends True ? CheckSelect<T, Prisma__audit_tableClient<audit_table>, Prisma__audit_tableClient<audit_tableGetPayload<T>>> : CheckSelect<T, Prisma__audit_tableClient<audit_table | null >, Prisma__audit_tableClient<audit_tableGetPayload<T> | null >>

    /**
     * Find the first Audit_table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_tableFindFirstArgs} args - Arguments to find a Audit_table
     * @example
     * // Get one Audit_table
     * const audit_table = await prisma.audit_table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends audit_tableFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, audit_tableFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'audit_table'> extends True ? CheckSelect<T, Prisma__audit_tableClient<audit_table>, Prisma__audit_tableClient<audit_tableGetPayload<T>>> : CheckSelect<T, Prisma__audit_tableClient<audit_table | null >, Prisma__audit_tableClient<audit_tableGetPayload<T> | null >>

    /**
     * Find zero or more Audit_tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_tableFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Audit_tables
     * const audit_tables = await prisma.audit_table.findMany()
     * 
     * // Get first 10 Audit_tables
     * const audit_tables = await prisma.audit_table.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const audit_tableWithIdOnly = await prisma.audit_table.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends audit_tableFindManyArgs>(
      args?: SelectSubset<T, audit_tableFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<audit_table>>, PrismaPromise<Array<audit_tableGetPayload<T>>>>

    /**
     * Create a Audit_table.
     * @param {audit_tableCreateArgs} args - Arguments to create a Audit_table.
     * @example
     * // Create one Audit_table
     * const Audit_table = await prisma.audit_table.create({
     *   data: {
     *     // ... data to create a Audit_table
     *   }
     * })
     * 
    **/
    create<T extends audit_tableCreateArgs>(
      args: SelectSubset<T, audit_tableCreateArgs>
    ): CheckSelect<T, Prisma__audit_tableClient<audit_table>, Prisma__audit_tableClient<audit_tableGetPayload<T>>>

    /**
     * Create many Audit_tables.
     *     @param {audit_tableCreateManyArgs} args - Arguments to create many Audit_tables.
     *     @example
     *     // Create many Audit_tables
     *     const audit_table = await prisma.audit_table.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends audit_tableCreateManyArgs>(
      args?: SelectSubset<T, audit_tableCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Audit_table.
     * @param {audit_tableDeleteArgs} args - Arguments to delete one Audit_table.
     * @example
     * // Delete one Audit_table
     * const Audit_table = await prisma.audit_table.delete({
     *   where: {
     *     // ... filter to delete one Audit_table
     *   }
     * })
     * 
    **/
    delete<T extends audit_tableDeleteArgs>(
      args: SelectSubset<T, audit_tableDeleteArgs>
    ): CheckSelect<T, Prisma__audit_tableClient<audit_table>, Prisma__audit_tableClient<audit_tableGetPayload<T>>>

    /**
     * Update one Audit_table.
     * @param {audit_tableUpdateArgs} args - Arguments to update one Audit_table.
     * @example
     * // Update one Audit_table
     * const audit_table = await prisma.audit_table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends audit_tableUpdateArgs>(
      args: SelectSubset<T, audit_tableUpdateArgs>
    ): CheckSelect<T, Prisma__audit_tableClient<audit_table>, Prisma__audit_tableClient<audit_tableGetPayload<T>>>

    /**
     * Delete zero or more Audit_tables.
     * @param {audit_tableDeleteManyArgs} args - Arguments to filter Audit_tables to delete.
     * @example
     * // Delete a few Audit_tables
     * const { count } = await prisma.audit_table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends audit_tableDeleteManyArgs>(
      args?: SelectSubset<T, audit_tableDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audit_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_tableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Audit_tables
     * const audit_table = await prisma.audit_table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends audit_tableUpdateManyArgs>(
      args: SelectSubset<T, audit_tableUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Audit_table.
     * @param {audit_tableUpsertArgs} args - Arguments to update or create a Audit_table.
     * @example
     * // Update or create a Audit_table
     * const audit_table = await prisma.audit_table.upsert({
     *   create: {
     *     // ... data to create a Audit_table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Audit_table we want to update
     *   }
     * })
    **/
    upsert<T extends audit_tableUpsertArgs>(
      args: SelectSubset<T, audit_tableUpsertArgs>
    ): CheckSelect<T, Prisma__audit_tableClient<audit_table>, Prisma__audit_tableClient<audit_tableGetPayload<T>>>

    /**
     * Find one Audit_table that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {audit_tableFindUniqueOrThrowArgs} args - Arguments to find a Audit_table
     * @example
     * // Get one Audit_table
     * const audit_table = await prisma.audit_table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends audit_tableFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, audit_tableFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__audit_tableClient<audit_table>, Prisma__audit_tableClient<audit_tableGetPayload<T>>>

    /**
     * Find the first Audit_table that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_tableFindFirstOrThrowArgs} args - Arguments to find a Audit_table
     * @example
     * // Get one Audit_table
     * const audit_table = await prisma.audit_table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends audit_tableFindFirstOrThrowArgs>(
      args?: SelectSubset<T, audit_tableFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__audit_tableClient<audit_table>, Prisma__audit_tableClient<audit_tableGetPayload<T>>>

    /**
     * Count the number of Audit_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_tableCountArgs} args - Arguments to filter Audit_tables to count.
     * @example
     * // Count the number of Audit_tables
     * const count = await prisma.audit_table.count({
     *   where: {
     *     // ... the filter for the Audit_tables we want to count
     *   }
     * })
    **/
    count<T extends audit_tableCountArgs>(
      args?: Subset<T, audit_tableCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Audit_tableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Audit_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Audit_tableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Audit_tableAggregateArgs>(args: Subset<T, Audit_tableAggregateArgs>): PrismaPromise<GetAudit_tableAggregateType<T>>

    /**
     * Group by Audit_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Audit_tableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Audit_tableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Audit_tableGroupByArgs['orderBy'] }
        : { orderBy?: Audit_tableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Audit_tableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAudit_tableGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for audit_table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__audit_tableClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * audit_table base type for findUnique actions
   */
  export type audit_tableFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the audit_table
     * 
    **/
    select?: audit_tableSelect | null
    /**
     * Filter, which audit_table to fetch.
     * 
    **/
    where: audit_tableWhereUniqueInput
  }

  /**
   * audit_table: findUnique
   */
  export interface audit_tableFindUniqueArgs extends audit_tableFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * audit_table base type for findFirst actions
   */
  export type audit_tableFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the audit_table
     * 
    **/
    select?: audit_tableSelect | null
    /**
     * Filter, which audit_table to fetch.
     * 
    **/
    where?: audit_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_tables to fetch.
     * 
    **/
    orderBy?: Enumerable<audit_tableOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for audit_tables.
     * 
    **/
    cursor?: audit_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_tables from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_tables.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of audit_tables.
     * 
    **/
    distinct?: Enumerable<Audit_tableScalarFieldEnum>
  }

  /**
   * audit_table: findFirst
   */
  export interface audit_tableFindFirstArgs extends audit_tableFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * audit_table findMany
   */
  export type audit_tableFindManyArgs = {
    /**
     * Select specific fields to fetch from the audit_table
     * 
    **/
    select?: audit_tableSelect | null
    /**
     * Filter, which audit_tables to fetch.
     * 
    **/
    where?: audit_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_tables to fetch.
     * 
    **/
    orderBy?: Enumerable<audit_tableOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing audit_tables.
     * 
    **/
    cursor?: audit_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_tables from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_tables.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Audit_tableScalarFieldEnum>
  }


  /**
   * audit_table create
   */
  export type audit_tableCreateArgs = {
    /**
     * Select specific fields to fetch from the audit_table
     * 
    **/
    select?: audit_tableSelect | null
    /**
     * The data needed to create a audit_table.
     * 
    **/
    data: XOR<audit_tableCreateInput, audit_tableUncheckedCreateInput>
  }


  /**
   * audit_table createMany
   */
  export type audit_tableCreateManyArgs = {
    /**
     * The data used to create many audit_tables.
     * 
    **/
    data: Enumerable<audit_tableCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * audit_table update
   */
  export type audit_tableUpdateArgs = {
    /**
     * Select specific fields to fetch from the audit_table
     * 
    **/
    select?: audit_tableSelect | null
    /**
     * The data needed to update a audit_table.
     * 
    **/
    data: XOR<audit_tableUpdateInput, audit_tableUncheckedUpdateInput>
    /**
     * Choose, which audit_table to update.
     * 
    **/
    where: audit_tableWhereUniqueInput
  }


  /**
   * audit_table updateMany
   */
  export type audit_tableUpdateManyArgs = {
    /**
     * The data used to update audit_tables.
     * 
    **/
    data: XOR<audit_tableUpdateManyMutationInput, audit_tableUncheckedUpdateManyInput>
    /**
     * Filter which audit_tables to update
     * 
    **/
    where?: audit_tableWhereInput
  }


  /**
   * audit_table upsert
   */
  export type audit_tableUpsertArgs = {
    /**
     * Select specific fields to fetch from the audit_table
     * 
    **/
    select?: audit_tableSelect | null
    /**
     * The filter to search for the audit_table to update in case it exists.
     * 
    **/
    where: audit_tableWhereUniqueInput
    /**
     * In case the audit_table found by the `where` argument doesn't exist, create a new audit_table with this data.
     * 
    **/
    create: XOR<audit_tableCreateInput, audit_tableUncheckedCreateInput>
    /**
     * In case the audit_table was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<audit_tableUpdateInput, audit_tableUncheckedUpdateInput>
  }


  /**
   * audit_table delete
   */
  export type audit_tableDeleteArgs = {
    /**
     * Select specific fields to fetch from the audit_table
     * 
    **/
    select?: audit_tableSelect | null
    /**
     * Filter which audit_table to delete.
     * 
    **/
    where: audit_tableWhereUniqueInput
  }


  /**
   * audit_table deleteMany
   */
  export type audit_tableDeleteManyArgs = {
    /**
     * Filter which audit_tables to delete
     * 
    **/
    where?: audit_tableWhereInput
  }


  /**
   * audit_table: findUniqueOrThrow
   */
  export type audit_tableFindUniqueOrThrowArgs = audit_tableFindUniqueArgsBase
      

  /**
   * audit_table: findFirstOrThrow
   */
  export type audit_tableFindFirstOrThrowArgs = audit_tableFindFirstArgsBase
      

  /**
   * audit_table without action
   */
  export type audit_tableArgs = {
    /**
     * Select specific fields to fetch from the audit_table
     * 
    **/
    select?: audit_tableSelect | null
  }



  /**
   * Model manager_dashboard_tbl
   */


  export type AggregateManager_dashboard_tbl = {
    _count: Manager_dashboard_tblCountAggregateOutputType | null
    _avg: Manager_dashboard_tblAvgAggregateOutputType | null
    _sum: Manager_dashboard_tblSumAggregateOutputType | null
    _min: Manager_dashboard_tblMinAggregateOutputType | null
    _max: Manager_dashboard_tblMaxAggregateOutputType | null
  }

  export type Manager_dashboard_tblAvgAggregateOutputType = {
    manager_dashboard_id: number | null
  }

  export type Manager_dashboard_tblSumAggregateOutputType = {
    manager_dashboard_id: number | null
  }

  export type Manager_dashboard_tblMinAggregateOutputType = {
    REGION: string | null
    DISTRICT: string | null
    TRAM: string | null
    EFIS: string | null
    DEPUTY_NAME: string | null
    DEPUTY_EMAIL: string | null
    PRIN_UNIT: string | null
    PRIN_EFIS: string | null
    PRIN_NAME: string | null
    PRIN_EMAIL: string | null
    CHIEF_UNIT: string | null
    CHIEF_EFIS: string | null
    CHIEF_NAME: string | null
    CHIEF_EMAIL: string | null
    STE_UNIT: string | null
    STE_EFIS: string | null
    STE_NAME: string | null
    STE_EMAIL: string | null
    manager_dashboard_id: number | null
  }

  export type Manager_dashboard_tblMaxAggregateOutputType = {
    REGION: string | null
    DISTRICT: string | null
    TRAM: string | null
    EFIS: string | null
    DEPUTY_NAME: string | null
    DEPUTY_EMAIL: string | null
    PRIN_UNIT: string | null
    PRIN_EFIS: string | null
    PRIN_NAME: string | null
    PRIN_EMAIL: string | null
    CHIEF_UNIT: string | null
    CHIEF_EFIS: string | null
    CHIEF_NAME: string | null
    CHIEF_EMAIL: string | null
    STE_UNIT: string | null
    STE_EFIS: string | null
    STE_NAME: string | null
    STE_EMAIL: string | null
    manager_dashboard_id: number | null
  }

  export type Manager_dashboard_tblCountAggregateOutputType = {
    REGION: number
    DISTRICT: number
    TRAM: number
    EFIS: number
    DEPUTY_NAME: number
    DEPUTY_EMAIL: number
    PRIN_UNIT: number
    PRIN_EFIS: number
    PRIN_NAME: number
    PRIN_EMAIL: number
    CHIEF_UNIT: number
    CHIEF_EFIS: number
    CHIEF_NAME: number
    CHIEF_EMAIL: number
    STE_UNIT: number
    STE_EFIS: number
    STE_NAME: number
    STE_EMAIL: number
    manager_dashboard_id: number
    _all: number
  }


  export type Manager_dashboard_tblAvgAggregateInputType = {
    manager_dashboard_id?: true
  }

  export type Manager_dashboard_tblSumAggregateInputType = {
    manager_dashboard_id?: true
  }

  export type Manager_dashboard_tblMinAggregateInputType = {
    REGION?: true
    DISTRICT?: true
    TRAM?: true
    EFIS?: true
    DEPUTY_NAME?: true
    DEPUTY_EMAIL?: true
    PRIN_UNIT?: true
    PRIN_EFIS?: true
    PRIN_NAME?: true
    PRIN_EMAIL?: true
    CHIEF_UNIT?: true
    CHIEF_EFIS?: true
    CHIEF_NAME?: true
    CHIEF_EMAIL?: true
    STE_UNIT?: true
    STE_EFIS?: true
    STE_NAME?: true
    STE_EMAIL?: true
    manager_dashboard_id?: true
  }

  export type Manager_dashboard_tblMaxAggregateInputType = {
    REGION?: true
    DISTRICT?: true
    TRAM?: true
    EFIS?: true
    DEPUTY_NAME?: true
    DEPUTY_EMAIL?: true
    PRIN_UNIT?: true
    PRIN_EFIS?: true
    PRIN_NAME?: true
    PRIN_EMAIL?: true
    CHIEF_UNIT?: true
    CHIEF_EFIS?: true
    CHIEF_NAME?: true
    CHIEF_EMAIL?: true
    STE_UNIT?: true
    STE_EFIS?: true
    STE_NAME?: true
    STE_EMAIL?: true
    manager_dashboard_id?: true
  }

  export type Manager_dashboard_tblCountAggregateInputType = {
    REGION?: true
    DISTRICT?: true
    TRAM?: true
    EFIS?: true
    DEPUTY_NAME?: true
    DEPUTY_EMAIL?: true
    PRIN_UNIT?: true
    PRIN_EFIS?: true
    PRIN_NAME?: true
    PRIN_EMAIL?: true
    CHIEF_UNIT?: true
    CHIEF_EFIS?: true
    CHIEF_NAME?: true
    CHIEF_EMAIL?: true
    STE_UNIT?: true
    STE_EFIS?: true
    STE_NAME?: true
    STE_EMAIL?: true
    manager_dashboard_id?: true
    _all?: true
  }

  export type Manager_dashboard_tblAggregateArgs = {
    /**
     * Filter which manager_dashboard_tbl to aggregate.
     * 
    **/
    where?: manager_dashboard_tblWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of manager_dashboard_tbls to fetch.
     * 
    **/
    orderBy?: Enumerable<manager_dashboard_tblOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: manager_dashboard_tblWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` manager_dashboard_tbls from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` manager_dashboard_tbls.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned manager_dashboard_tbls
    **/
    _count?: true | Manager_dashboard_tblCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Manager_dashboard_tblAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Manager_dashboard_tblSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Manager_dashboard_tblMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Manager_dashboard_tblMaxAggregateInputType
  }

  export type GetManager_dashboard_tblAggregateType<T extends Manager_dashboard_tblAggregateArgs> = {
        [P in keyof T & keyof AggregateManager_dashboard_tbl]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateManager_dashboard_tbl[P]>
      : GetScalarType<T[P], AggregateManager_dashboard_tbl[P]>
  }




  export type Manager_dashboard_tblGroupByArgs = {
    where?: manager_dashboard_tblWhereInput
    orderBy?: Enumerable<manager_dashboard_tblOrderByWithAggregationInput>
    by: Array<Manager_dashboard_tblScalarFieldEnum>
    having?: manager_dashboard_tblScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Manager_dashboard_tblCountAggregateInputType | true
    _avg?: Manager_dashboard_tblAvgAggregateInputType
    _sum?: Manager_dashboard_tblSumAggregateInputType
    _min?: Manager_dashboard_tblMinAggregateInputType
    _max?: Manager_dashboard_tblMaxAggregateInputType
  }


  export type Manager_dashboard_tblGroupByOutputType = {
    REGION: string | null
    DISTRICT: string | null
    TRAM: string | null
    EFIS: string | null
    DEPUTY_NAME: string | null
    DEPUTY_EMAIL: string | null
    PRIN_UNIT: string | null
    PRIN_EFIS: string | null
    PRIN_NAME: string | null
    PRIN_EMAIL: string | null
    CHIEF_UNIT: string | null
    CHIEF_EFIS: string | null
    CHIEF_NAME: string | null
    CHIEF_EMAIL: string | null
    STE_UNIT: string | null
    STE_EFIS: string | null
    STE_NAME: string | null
    STE_EMAIL: string | null
    manager_dashboard_id: number
    _count: Manager_dashboard_tblCountAggregateOutputType | null
    _avg: Manager_dashboard_tblAvgAggregateOutputType | null
    _sum: Manager_dashboard_tblSumAggregateOutputType | null
    _min: Manager_dashboard_tblMinAggregateOutputType | null
    _max: Manager_dashboard_tblMaxAggregateOutputType | null
  }

  type GetManager_dashboard_tblGroupByPayload<T extends Manager_dashboard_tblGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Manager_dashboard_tblGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Manager_dashboard_tblGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Manager_dashboard_tblGroupByOutputType[P]>
            : GetScalarType<T[P], Manager_dashboard_tblGroupByOutputType[P]>
        }
      >
    >


  export type manager_dashboard_tblSelect = {
    REGION?: boolean
    DISTRICT?: boolean
    TRAM?: boolean
    EFIS?: boolean
    DEPUTY_NAME?: boolean
    DEPUTY_EMAIL?: boolean
    PRIN_UNIT?: boolean
    PRIN_EFIS?: boolean
    PRIN_NAME?: boolean
    PRIN_EMAIL?: boolean
    CHIEF_UNIT?: boolean
    CHIEF_EFIS?: boolean
    CHIEF_NAME?: boolean
    CHIEF_EMAIL?: boolean
    STE_UNIT?: boolean
    STE_EFIS?: boolean
    STE_NAME?: boolean
    STE_EMAIL?: boolean
    manager_dashboard_id?: boolean
  }

  export type manager_dashboard_tblGetPayload<
    S extends boolean | null | undefined | manager_dashboard_tblArgs,
    U = keyof S
      > = S extends true
        ? manager_dashboard_tbl
    : S extends undefined
    ? never
    : S extends manager_dashboard_tblArgs | manager_dashboard_tblFindManyArgs
    ?'include' extends U
    ? manager_dashboard_tbl 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof manager_dashboard_tbl ? manager_dashboard_tbl[P] : never
  } 
    : manager_dashboard_tbl
  : manager_dashboard_tbl


  type manager_dashboard_tblCountArgs = Merge<
    Omit<manager_dashboard_tblFindManyArgs, 'select' | 'include'> & {
      select?: Manager_dashboard_tblCountAggregateInputType | true
    }
  >

  export interface manager_dashboard_tblDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Manager_dashboard_tbl that matches the filter.
     * @param {manager_dashboard_tblFindUniqueArgs} args - Arguments to find a Manager_dashboard_tbl
     * @example
     * // Get one Manager_dashboard_tbl
     * const manager_dashboard_tbl = await prisma.manager_dashboard_tbl.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends manager_dashboard_tblFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, manager_dashboard_tblFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'manager_dashboard_tbl'> extends True ? CheckSelect<T, Prisma__manager_dashboard_tblClient<manager_dashboard_tbl>, Prisma__manager_dashboard_tblClient<manager_dashboard_tblGetPayload<T>>> : CheckSelect<T, Prisma__manager_dashboard_tblClient<manager_dashboard_tbl | null >, Prisma__manager_dashboard_tblClient<manager_dashboard_tblGetPayload<T> | null >>

    /**
     * Find the first Manager_dashboard_tbl that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {manager_dashboard_tblFindFirstArgs} args - Arguments to find a Manager_dashboard_tbl
     * @example
     * // Get one Manager_dashboard_tbl
     * const manager_dashboard_tbl = await prisma.manager_dashboard_tbl.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends manager_dashboard_tblFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, manager_dashboard_tblFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'manager_dashboard_tbl'> extends True ? CheckSelect<T, Prisma__manager_dashboard_tblClient<manager_dashboard_tbl>, Prisma__manager_dashboard_tblClient<manager_dashboard_tblGetPayload<T>>> : CheckSelect<T, Prisma__manager_dashboard_tblClient<manager_dashboard_tbl | null >, Prisma__manager_dashboard_tblClient<manager_dashboard_tblGetPayload<T> | null >>

    /**
     * Find zero or more Manager_dashboard_tbls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {manager_dashboard_tblFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Manager_dashboard_tbls
     * const manager_dashboard_tbls = await prisma.manager_dashboard_tbl.findMany()
     * 
     * // Get first 10 Manager_dashboard_tbls
     * const manager_dashboard_tbls = await prisma.manager_dashboard_tbl.findMany({ take: 10 })
     * 
     * // Only select the `REGION`
     * const manager_dashboard_tblWithREGIONOnly = await prisma.manager_dashboard_tbl.findMany({ select: { REGION: true } })
     * 
    **/
    findMany<T extends manager_dashboard_tblFindManyArgs>(
      args?: SelectSubset<T, manager_dashboard_tblFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<manager_dashboard_tbl>>, PrismaPromise<Array<manager_dashboard_tblGetPayload<T>>>>

    /**
     * Create a Manager_dashboard_tbl.
     * @param {manager_dashboard_tblCreateArgs} args - Arguments to create a Manager_dashboard_tbl.
     * @example
     * // Create one Manager_dashboard_tbl
     * const Manager_dashboard_tbl = await prisma.manager_dashboard_tbl.create({
     *   data: {
     *     // ... data to create a Manager_dashboard_tbl
     *   }
     * })
     * 
    **/
    create<T extends manager_dashboard_tblCreateArgs>(
      args: SelectSubset<T, manager_dashboard_tblCreateArgs>
    ): CheckSelect<T, Prisma__manager_dashboard_tblClient<manager_dashboard_tbl>, Prisma__manager_dashboard_tblClient<manager_dashboard_tblGetPayload<T>>>

    /**
     * Create many Manager_dashboard_tbls.
     *     @param {manager_dashboard_tblCreateManyArgs} args - Arguments to create many Manager_dashboard_tbls.
     *     @example
     *     // Create many Manager_dashboard_tbls
     *     const manager_dashboard_tbl = await prisma.manager_dashboard_tbl.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends manager_dashboard_tblCreateManyArgs>(
      args?: SelectSubset<T, manager_dashboard_tblCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Manager_dashboard_tbl.
     * @param {manager_dashboard_tblDeleteArgs} args - Arguments to delete one Manager_dashboard_tbl.
     * @example
     * // Delete one Manager_dashboard_tbl
     * const Manager_dashboard_tbl = await prisma.manager_dashboard_tbl.delete({
     *   where: {
     *     // ... filter to delete one Manager_dashboard_tbl
     *   }
     * })
     * 
    **/
    delete<T extends manager_dashboard_tblDeleteArgs>(
      args: SelectSubset<T, manager_dashboard_tblDeleteArgs>
    ): CheckSelect<T, Prisma__manager_dashboard_tblClient<manager_dashboard_tbl>, Prisma__manager_dashboard_tblClient<manager_dashboard_tblGetPayload<T>>>

    /**
     * Update one Manager_dashboard_tbl.
     * @param {manager_dashboard_tblUpdateArgs} args - Arguments to update one Manager_dashboard_tbl.
     * @example
     * // Update one Manager_dashboard_tbl
     * const manager_dashboard_tbl = await prisma.manager_dashboard_tbl.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends manager_dashboard_tblUpdateArgs>(
      args: SelectSubset<T, manager_dashboard_tblUpdateArgs>
    ): CheckSelect<T, Prisma__manager_dashboard_tblClient<manager_dashboard_tbl>, Prisma__manager_dashboard_tblClient<manager_dashboard_tblGetPayload<T>>>

    /**
     * Delete zero or more Manager_dashboard_tbls.
     * @param {manager_dashboard_tblDeleteManyArgs} args - Arguments to filter Manager_dashboard_tbls to delete.
     * @example
     * // Delete a few Manager_dashboard_tbls
     * const { count } = await prisma.manager_dashboard_tbl.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends manager_dashboard_tblDeleteManyArgs>(
      args?: SelectSubset<T, manager_dashboard_tblDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Manager_dashboard_tbls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {manager_dashboard_tblUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Manager_dashboard_tbls
     * const manager_dashboard_tbl = await prisma.manager_dashboard_tbl.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends manager_dashboard_tblUpdateManyArgs>(
      args: SelectSubset<T, manager_dashboard_tblUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Manager_dashboard_tbl.
     * @param {manager_dashboard_tblUpsertArgs} args - Arguments to update or create a Manager_dashboard_tbl.
     * @example
     * // Update or create a Manager_dashboard_tbl
     * const manager_dashboard_tbl = await prisma.manager_dashboard_tbl.upsert({
     *   create: {
     *     // ... data to create a Manager_dashboard_tbl
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Manager_dashboard_tbl we want to update
     *   }
     * })
    **/
    upsert<T extends manager_dashboard_tblUpsertArgs>(
      args: SelectSubset<T, manager_dashboard_tblUpsertArgs>
    ): CheckSelect<T, Prisma__manager_dashboard_tblClient<manager_dashboard_tbl>, Prisma__manager_dashboard_tblClient<manager_dashboard_tblGetPayload<T>>>

    /**
     * Find one Manager_dashboard_tbl that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {manager_dashboard_tblFindUniqueOrThrowArgs} args - Arguments to find a Manager_dashboard_tbl
     * @example
     * // Get one Manager_dashboard_tbl
     * const manager_dashboard_tbl = await prisma.manager_dashboard_tbl.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends manager_dashboard_tblFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, manager_dashboard_tblFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__manager_dashboard_tblClient<manager_dashboard_tbl>, Prisma__manager_dashboard_tblClient<manager_dashboard_tblGetPayload<T>>>

    /**
     * Find the first Manager_dashboard_tbl that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {manager_dashboard_tblFindFirstOrThrowArgs} args - Arguments to find a Manager_dashboard_tbl
     * @example
     * // Get one Manager_dashboard_tbl
     * const manager_dashboard_tbl = await prisma.manager_dashboard_tbl.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends manager_dashboard_tblFindFirstOrThrowArgs>(
      args?: SelectSubset<T, manager_dashboard_tblFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__manager_dashboard_tblClient<manager_dashboard_tbl>, Prisma__manager_dashboard_tblClient<manager_dashboard_tblGetPayload<T>>>

    /**
     * Count the number of Manager_dashboard_tbls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {manager_dashboard_tblCountArgs} args - Arguments to filter Manager_dashboard_tbls to count.
     * @example
     * // Count the number of Manager_dashboard_tbls
     * const count = await prisma.manager_dashboard_tbl.count({
     *   where: {
     *     // ... the filter for the Manager_dashboard_tbls we want to count
     *   }
     * })
    **/
    count<T extends manager_dashboard_tblCountArgs>(
      args?: Subset<T, manager_dashboard_tblCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Manager_dashboard_tblCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Manager_dashboard_tbl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Manager_dashboard_tblAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Manager_dashboard_tblAggregateArgs>(args: Subset<T, Manager_dashboard_tblAggregateArgs>): PrismaPromise<GetManager_dashboard_tblAggregateType<T>>

    /**
     * Group by Manager_dashboard_tbl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Manager_dashboard_tblGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Manager_dashboard_tblGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Manager_dashboard_tblGroupByArgs['orderBy'] }
        : { orderBy?: Manager_dashboard_tblGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Manager_dashboard_tblGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetManager_dashboard_tblGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for manager_dashboard_tbl.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__manager_dashboard_tblClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * manager_dashboard_tbl base type for findUnique actions
   */
  export type manager_dashboard_tblFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the manager_dashboard_tbl
     * 
    **/
    select?: manager_dashboard_tblSelect | null
    /**
     * Filter, which manager_dashboard_tbl to fetch.
     * 
    **/
    where: manager_dashboard_tblWhereUniqueInput
  }

  /**
   * manager_dashboard_tbl: findUnique
   */
  export interface manager_dashboard_tblFindUniqueArgs extends manager_dashboard_tblFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * manager_dashboard_tbl base type for findFirst actions
   */
  export type manager_dashboard_tblFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the manager_dashboard_tbl
     * 
    **/
    select?: manager_dashboard_tblSelect | null
    /**
     * Filter, which manager_dashboard_tbl to fetch.
     * 
    **/
    where?: manager_dashboard_tblWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of manager_dashboard_tbls to fetch.
     * 
    **/
    orderBy?: Enumerable<manager_dashboard_tblOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for manager_dashboard_tbls.
     * 
    **/
    cursor?: manager_dashboard_tblWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` manager_dashboard_tbls from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` manager_dashboard_tbls.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of manager_dashboard_tbls.
     * 
    **/
    distinct?: Enumerable<Manager_dashboard_tblScalarFieldEnum>
  }

  /**
   * manager_dashboard_tbl: findFirst
   */
  export interface manager_dashboard_tblFindFirstArgs extends manager_dashboard_tblFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * manager_dashboard_tbl findMany
   */
  export type manager_dashboard_tblFindManyArgs = {
    /**
     * Select specific fields to fetch from the manager_dashboard_tbl
     * 
    **/
    select?: manager_dashboard_tblSelect | null
    /**
     * Filter, which manager_dashboard_tbls to fetch.
     * 
    **/
    where?: manager_dashboard_tblWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of manager_dashboard_tbls to fetch.
     * 
    **/
    orderBy?: Enumerable<manager_dashboard_tblOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing manager_dashboard_tbls.
     * 
    **/
    cursor?: manager_dashboard_tblWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` manager_dashboard_tbls from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` manager_dashboard_tbls.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Manager_dashboard_tblScalarFieldEnum>
  }


  /**
   * manager_dashboard_tbl create
   */
  export type manager_dashboard_tblCreateArgs = {
    /**
     * Select specific fields to fetch from the manager_dashboard_tbl
     * 
    **/
    select?: manager_dashboard_tblSelect | null
    /**
     * The data needed to create a manager_dashboard_tbl.
     * 
    **/
    data: XOR<manager_dashboard_tblCreateInput, manager_dashboard_tblUncheckedCreateInput>
  }


  /**
   * manager_dashboard_tbl createMany
   */
  export type manager_dashboard_tblCreateManyArgs = {
    /**
     * The data used to create many manager_dashboard_tbls.
     * 
    **/
    data: Enumerable<manager_dashboard_tblCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * manager_dashboard_tbl update
   */
  export type manager_dashboard_tblUpdateArgs = {
    /**
     * Select specific fields to fetch from the manager_dashboard_tbl
     * 
    **/
    select?: manager_dashboard_tblSelect | null
    /**
     * The data needed to update a manager_dashboard_tbl.
     * 
    **/
    data: XOR<manager_dashboard_tblUpdateInput, manager_dashboard_tblUncheckedUpdateInput>
    /**
     * Choose, which manager_dashboard_tbl to update.
     * 
    **/
    where: manager_dashboard_tblWhereUniqueInput
  }


  /**
   * manager_dashboard_tbl updateMany
   */
  export type manager_dashboard_tblUpdateManyArgs = {
    /**
     * The data used to update manager_dashboard_tbls.
     * 
    **/
    data: XOR<manager_dashboard_tblUpdateManyMutationInput, manager_dashboard_tblUncheckedUpdateManyInput>
    /**
     * Filter which manager_dashboard_tbls to update
     * 
    **/
    where?: manager_dashboard_tblWhereInput
  }


  /**
   * manager_dashboard_tbl upsert
   */
  export type manager_dashboard_tblUpsertArgs = {
    /**
     * Select specific fields to fetch from the manager_dashboard_tbl
     * 
    **/
    select?: manager_dashboard_tblSelect | null
    /**
     * The filter to search for the manager_dashboard_tbl to update in case it exists.
     * 
    **/
    where: manager_dashboard_tblWhereUniqueInput
    /**
     * In case the manager_dashboard_tbl found by the `where` argument doesn't exist, create a new manager_dashboard_tbl with this data.
     * 
    **/
    create: XOR<manager_dashboard_tblCreateInput, manager_dashboard_tblUncheckedCreateInput>
    /**
     * In case the manager_dashboard_tbl was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<manager_dashboard_tblUpdateInput, manager_dashboard_tblUncheckedUpdateInput>
  }


  /**
   * manager_dashboard_tbl delete
   */
  export type manager_dashboard_tblDeleteArgs = {
    /**
     * Select specific fields to fetch from the manager_dashboard_tbl
     * 
    **/
    select?: manager_dashboard_tblSelect | null
    /**
     * Filter which manager_dashboard_tbl to delete.
     * 
    **/
    where: manager_dashboard_tblWhereUniqueInput
  }


  /**
   * manager_dashboard_tbl deleteMany
   */
  export type manager_dashboard_tblDeleteManyArgs = {
    /**
     * Filter which manager_dashboard_tbls to delete
     * 
    **/
    where?: manager_dashboard_tblWhereInput
  }


  /**
   * manager_dashboard_tbl: findUniqueOrThrow
   */
  export type manager_dashboard_tblFindUniqueOrThrowArgs = manager_dashboard_tblFindUniqueArgsBase
      

  /**
   * manager_dashboard_tbl: findFirstOrThrow
   */
  export type manager_dashboard_tblFindFirstOrThrowArgs = manager_dashboard_tblFindFirstArgsBase
      

  /**
   * manager_dashboard_tbl without action
   */
  export type manager_dashboard_tblArgs = {
    /**
     * Select specific fields to fetch from the manager_dashboard_tbl
     * 
    **/
    select?: manager_dashboard_tblSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const Audit_superiorScalarFieldEnum: {
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
  };

  export type Audit_superiorScalarFieldEnum = (typeof Audit_superiorScalarFieldEnum)[keyof typeof Audit_superiorScalarFieldEnum]


  export const Audit_tableScalarFieldEnum: {
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
  };

  export type Audit_tableScalarFieldEnum = (typeof Audit_tableScalarFieldEnum)[keyof typeof Audit_tableScalarFieldEnum]


  export const Manager_dashboard_tblScalarFieldEnum: {
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
  };

  export type Manager_dashboard_tblScalarFieldEnum = (typeof Manager_dashboard_tblScalarFieldEnum)[keyof typeof Manager_dashboard_tblScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Deep Input Types
   */


  export type audit_superiorWhereInput = {
    AND?: Enumerable<audit_superiorWhereInput>
    OR?: Enumerable<audit_superiorWhereInput>
    NOT?: Enumerable<audit_superiorWhereInput>
    id?: IntFilter | number
    changed_by_number?: StringNullableFilter | string | null
    changed_employee?: StringNullableFilter | string | null
    changed_employee_role?: StringNullableFilter | string | null
    changed_employee_efis?: StringNullableFilter | string | null
    old_superior_name?: StringNullableFilter | string | null
    old_superior_efis?: StringNullableFilter | string | null
    new_superior_name?: StringNullableFilter | string | null
    new_superior_efis?: StringNullableFilter | string | null
    changed_on_date?: StringNullableFilter | string | null
  }

  export type audit_superiorOrderByWithRelationInput = {
    id?: SortOrder
    changed_by_number?: SortOrder
    changed_employee?: SortOrder
    changed_employee_role?: SortOrder
    changed_employee_efis?: SortOrder
    old_superior_name?: SortOrder
    old_superior_efis?: SortOrder
    new_superior_name?: SortOrder
    new_superior_efis?: SortOrder
    changed_on_date?: SortOrder
  }

  export type audit_superiorWhereUniqueInput = {
    id?: number
  }

  export type audit_superiorOrderByWithAggregationInput = {
    id?: SortOrder
    changed_by_number?: SortOrder
    changed_employee?: SortOrder
    changed_employee_role?: SortOrder
    changed_employee_efis?: SortOrder
    old_superior_name?: SortOrder
    old_superior_efis?: SortOrder
    new_superior_name?: SortOrder
    new_superior_efis?: SortOrder
    changed_on_date?: SortOrder
    _count?: audit_superiorCountOrderByAggregateInput
    _avg?: audit_superiorAvgOrderByAggregateInput
    _max?: audit_superiorMaxOrderByAggregateInput
    _min?: audit_superiorMinOrderByAggregateInput
    _sum?: audit_superiorSumOrderByAggregateInput
  }

  export type audit_superiorScalarWhereWithAggregatesInput = {
    AND?: Enumerable<audit_superiorScalarWhereWithAggregatesInput>
    OR?: Enumerable<audit_superiorScalarWhereWithAggregatesInput>
    NOT?: Enumerable<audit_superiorScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    changed_by_number?: StringNullableWithAggregatesFilter | string | null
    changed_employee?: StringNullableWithAggregatesFilter | string | null
    changed_employee_role?: StringNullableWithAggregatesFilter | string | null
    changed_employee_efis?: StringNullableWithAggregatesFilter | string | null
    old_superior_name?: StringNullableWithAggregatesFilter | string | null
    old_superior_efis?: StringNullableWithAggregatesFilter | string | null
    new_superior_name?: StringNullableWithAggregatesFilter | string | null
    new_superior_efis?: StringNullableWithAggregatesFilter | string | null
    changed_on_date?: StringNullableWithAggregatesFilter | string | null
  }

  export type audit_tableWhereInput = {
    AND?: Enumerable<audit_tableWhereInput>
    OR?: Enumerable<audit_tableWhereInput>
    NOT?: Enumerable<audit_tableWhereInput>
    id?: IntFilter | number
    change_type?: StringNullableFilter | string | null
    changed_by_number?: StringNullableFilter | string | null
    old_name?: StringFilter | string
    new_name?: StringFilter | string
    old_email?: StringFilter | string
    new_email?: StringFilter | string
    role?: StringNullableFilter | string | null
    efis?: StringNullableFilter | string | null
    region?: StringFilter | string
    date_time?: StringNullableFilter | string | null
  }

  export type audit_tableOrderByWithRelationInput = {
    id?: SortOrder
    change_type?: SortOrder
    changed_by_number?: SortOrder
    old_name?: SortOrder
    new_name?: SortOrder
    old_email?: SortOrder
    new_email?: SortOrder
    role?: SortOrder
    efis?: SortOrder
    region?: SortOrder
    date_time?: SortOrder
  }

  export type audit_tableWhereUniqueInput = {
    id?: number
  }

  export type audit_tableOrderByWithAggregationInput = {
    id?: SortOrder
    change_type?: SortOrder
    changed_by_number?: SortOrder
    old_name?: SortOrder
    new_name?: SortOrder
    old_email?: SortOrder
    new_email?: SortOrder
    role?: SortOrder
    efis?: SortOrder
    region?: SortOrder
    date_time?: SortOrder
    _count?: audit_tableCountOrderByAggregateInput
    _avg?: audit_tableAvgOrderByAggregateInput
    _max?: audit_tableMaxOrderByAggregateInput
    _min?: audit_tableMinOrderByAggregateInput
    _sum?: audit_tableSumOrderByAggregateInput
  }

  export type audit_tableScalarWhereWithAggregatesInput = {
    AND?: Enumerable<audit_tableScalarWhereWithAggregatesInput>
    OR?: Enumerable<audit_tableScalarWhereWithAggregatesInput>
    NOT?: Enumerable<audit_tableScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    change_type?: StringNullableWithAggregatesFilter | string | null
    changed_by_number?: StringNullableWithAggregatesFilter | string | null
    old_name?: StringWithAggregatesFilter | string
    new_name?: StringWithAggregatesFilter | string
    old_email?: StringWithAggregatesFilter | string
    new_email?: StringWithAggregatesFilter | string
    role?: StringNullableWithAggregatesFilter | string | null
    efis?: StringNullableWithAggregatesFilter | string | null
    region?: StringWithAggregatesFilter | string
    date_time?: StringNullableWithAggregatesFilter | string | null
  }

  export type manager_dashboard_tblWhereInput = {
    AND?: Enumerable<manager_dashboard_tblWhereInput>
    OR?: Enumerable<manager_dashboard_tblWhereInput>
    NOT?: Enumerable<manager_dashboard_tblWhereInput>
    REGION?: StringNullableFilter | string | null
    DISTRICT?: StringNullableFilter | string | null
    TRAM?: StringNullableFilter | string | null
    EFIS?: StringNullableFilter | string | null
    DEPUTY_NAME?: StringNullableFilter | string | null
    DEPUTY_EMAIL?: StringNullableFilter | string | null
    PRIN_UNIT?: StringNullableFilter | string | null
    PRIN_EFIS?: StringNullableFilter | string | null
    PRIN_NAME?: StringNullableFilter | string | null
    PRIN_EMAIL?: StringNullableFilter | string | null
    CHIEF_UNIT?: StringNullableFilter | string | null
    CHIEF_EFIS?: StringNullableFilter | string | null
    CHIEF_NAME?: StringNullableFilter | string | null
    CHIEF_EMAIL?: StringNullableFilter | string | null
    STE_UNIT?: StringNullableFilter | string | null
    STE_EFIS?: StringNullableFilter | string | null
    STE_NAME?: StringNullableFilter | string | null
    STE_EMAIL?: StringNullableFilter | string | null
    manager_dashboard_id?: IntFilter | number
  }

  export type manager_dashboard_tblOrderByWithRelationInput = {
    REGION?: SortOrder
    DISTRICT?: SortOrder
    TRAM?: SortOrder
    EFIS?: SortOrder
    DEPUTY_NAME?: SortOrder
    DEPUTY_EMAIL?: SortOrder
    PRIN_UNIT?: SortOrder
    PRIN_EFIS?: SortOrder
    PRIN_NAME?: SortOrder
    PRIN_EMAIL?: SortOrder
    CHIEF_UNIT?: SortOrder
    CHIEF_EFIS?: SortOrder
    CHIEF_NAME?: SortOrder
    CHIEF_EMAIL?: SortOrder
    STE_UNIT?: SortOrder
    STE_EFIS?: SortOrder
    STE_NAME?: SortOrder
    STE_EMAIL?: SortOrder
    manager_dashboard_id?: SortOrder
  }

  export type manager_dashboard_tblWhereUniqueInput = {
    manager_dashboard_id?: number
  }

  export type manager_dashboard_tblOrderByWithAggregationInput = {
    REGION?: SortOrder
    DISTRICT?: SortOrder
    TRAM?: SortOrder
    EFIS?: SortOrder
    DEPUTY_NAME?: SortOrder
    DEPUTY_EMAIL?: SortOrder
    PRIN_UNIT?: SortOrder
    PRIN_EFIS?: SortOrder
    PRIN_NAME?: SortOrder
    PRIN_EMAIL?: SortOrder
    CHIEF_UNIT?: SortOrder
    CHIEF_EFIS?: SortOrder
    CHIEF_NAME?: SortOrder
    CHIEF_EMAIL?: SortOrder
    STE_UNIT?: SortOrder
    STE_EFIS?: SortOrder
    STE_NAME?: SortOrder
    STE_EMAIL?: SortOrder
    manager_dashboard_id?: SortOrder
    _count?: manager_dashboard_tblCountOrderByAggregateInput
    _avg?: manager_dashboard_tblAvgOrderByAggregateInput
    _max?: manager_dashboard_tblMaxOrderByAggregateInput
    _min?: manager_dashboard_tblMinOrderByAggregateInput
    _sum?: manager_dashboard_tblSumOrderByAggregateInput
  }

  export type manager_dashboard_tblScalarWhereWithAggregatesInput = {
    AND?: Enumerable<manager_dashboard_tblScalarWhereWithAggregatesInput>
    OR?: Enumerable<manager_dashboard_tblScalarWhereWithAggregatesInput>
    NOT?: Enumerable<manager_dashboard_tblScalarWhereWithAggregatesInput>
    REGION?: StringNullableWithAggregatesFilter | string | null
    DISTRICT?: StringNullableWithAggregatesFilter | string | null
    TRAM?: StringNullableWithAggregatesFilter | string | null
    EFIS?: StringNullableWithAggregatesFilter | string | null
    DEPUTY_NAME?: StringNullableWithAggregatesFilter | string | null
    DEPUTY_EMAIL?: StringNullableWithAggregatesFilter | string | null
    PRIN_UNIT?: StringNullableWithAggregatesFilter | string | null
    PRIN_EFIS?: StringNullableWithAggregatesFilter | string | null
    PRIN_NAME?: StringNullableWithAggregatesFilter | string | null
    PRIN_EMAIL?: StringNullableWithAggregatesFilter | string | null
    CHIEF_UNIT?: StringNullableWithAggregatesFilter | string | null
    CHIEF_EFIS?: StringNullableWithAggregatesFilter | string | null
    CHIEF_NAME?: StringNullableWithAggregatesFilter | string | null
    CHIEF_EMAIL?: StringNullableWithAggregatesFilter | string | null
    STE_UNIT?: StringNullableWithAggregatesFilter | string | null
    STE_EFIS?: StringNullableWithAggregatesFilter | string | null
    STE_NAME?: StringNullableWithAggregatesFilter | string | null
    STE_EMAIL?: StringNullableWithAggregatesFilter | string | null
    manager_dashboard_id?: IntWithAggregatesFilter | number
  }

  export type audit_superiorCreateInput = {
    changed_by_number?: string | null
    changed_employee?: string | null
    changed_employee_role?: string | null
    changed_employee_efis?: string | null
    old_superior_name?: string | null
    old_superior_efis?: string | null
    new_superior_name?: string | null
    new_superior_efis?: string | null
    changed_on_date?: string | null
  }

  export type audit_superiorUncheckedCreateInput = {
    id?: number
    changed_by_number?: string | null
    changed_employee?: string | null
    changed_employee_role?: string | null
    changed_employee_efis?: string | null
    old_superior_name?: string | null
    old_superior_efis?: string | null
    new_superior_name?: string | null
    new_superior_efis?: string | null
    changed_on_date?: string | null
  }

  export type audit_superiorUpdateInput = {
    changed_by_number?: NullableStringFieldUpdateOperationsInput | string | null
    changed_employee?: NullableStringFieldUpdateOperationsInput | string | null
    changed_employee_role?: NullableStringFieldUpdateOperationsInput | string | null
    changed_employee_efis?: NullableStringFieldUpdateOperationsInput | string | null
    old_superior_name?: NullableStringFieldUpdateOperationsInput | string | null
    old_superior_efis?: NullableStringFieldUpdateOperationsInput | string | null
    new_superior_name?: NullableStringFieldUpdateOperationsInput | string | null
    new_superior_efis?: NullableStringFieldUpdateOperationsInput | string | null
    changed_on_date?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type audit_superiorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    changed_by_number?: NullableStringFieldUpdateOperationsInput | string | null
    changed_employee?: NullableStringFieldUpdateOperationsInput | string | null
    changed_employee_role?: NullableStringFieldUpdateOperationsInput | string | null
    changed_employee_efis?: NullableStringFieldUpdateOperationsInput | string | null
    old_superior_name?: NullableStringFieldUpdateOperationsInput | string | null
    old_superior_efis?: NullableStringFieldUpdateOperationsInput | string | null
    new_superior_name?: NullableStringFieldUpdateOperationsInput | string | null
    new_superior_efis?: NullableStringFieldUpdateOperationsInput | string | null
    changed_on_date?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type audit_superiorCreateManyInput = {
    id?: number
    changed_by_number?: string | null
    changed_employee?: string | null
    changed_employee_role?: string | null
    changed_employee_efis?: string | null
    old_superior_name?: string | null
    old_superior_efis?: string | null
    new_superior_name?: string | null
    new_superior_efis?: string | null
    changed_on_date?: string | null
  }

  export type audit_superiorUpdateManyMutationInput = {
    changed_by_number?: NullableStringFieldUpdateOperationsInput | string | null
    changed_employee?: NullableStringFieldUpdateOperationsInput | string | null
    changed_employee_role?: NullableStringFieldUpdateOperationsInput | string | null
    changed_employee_efis?: NullableStringFieldUpdateOperationsInput | string | null
    old_superior_name?: NullableStringFieldUpdateOperationsInput | string | null
    old_superior_efis?: NullableStringFieldUpdateOperationsInput | string | null
    new_superior_name?: NullableStringFieldUpdateOperationsInput | string | null
    new_superior_efis?: NullableStringFieldUpdateOperationsInput | string | null
    changed_on_date?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type audit_superiorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    changed_by_number?: NullableStringFieldUpdateOperationsInput | string | null
    changed_employee?: NullableStringFieldUpdateOperationsInput | string | null
    changed_employee_role?: NullableStringFieldUpdateOperationsInput | string | null
    changed_employee_efis?: NullableStringFieldUpdateOperationsInput | string | null
    old_superior_name?: NullableStringFieldUpdateOperationsInput | string | null
    old_superior_efis?: NullableStringFieldUpdateOperationsInput | string | null
    new_superior_name?: NullableStringFieldUpdateOperationsInput | string | null
    new_superior_efis?: NullableStringFieldUpdateOperationsInput | string | null
    changed_on_date?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type audit_tableCreateInput = {
    change_type?: string | null
    changed_by_number?: string | null
    old_name: string
    new_name: string
    old_email: string
    new_email: string
    role?: string | null
    efis?: string | null
    region: string
    date_time?: string | null
  }

  export type audit_tableUncheckedCreateInput = {
    id?: number
    change_type?: string | null
    changed_by_number?: string | null
    old_name: string
    new_name: string
    old_email: string
    new_email: string
    role?: string | null
    efis?: string | null
    region: string
    date_time?: string | null
  }

  export type audit_tableUpdateInput = {
    change_type?: NullableStringFieldUpdateOperationsInput | string | null
    changed_by_number?: NullableStringFieldUpdateOperationsInput | string | null
    old_name?: StringFieldUpdateOperationsInput | string
    new_name?: StringFieldUpdateOperationsInput | string
    old_email?: StringFieldUpdateOperationsInput | string
    new_email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    efis?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    date_time?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type audit_tableUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    change_type?: NullableStringFieldUpdateOperationsInput | string | null
    changed_by_number?: NullableStringFieldUpdateOperationsInput | string | null
    old_name?: StringFieldUpdateOperationsInput | string
    new_name?: StringFieldUpdateOperationsInput | string
    old_email?: StringFieldUpdateOperationsInput | string
    new_email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    efis?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    date_time?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type audit_tableCreateManyInput = {
    id?: number
    change_type?: string | null
    changed_by_number?: string | null
    old_name: string
    new_name: string
    old_email: string
    new_email: string
    role?: string | null
    efis?: string | null
    region: string
    date_time?: string | null
  }

  export type audit_tableUpdateManyMutationInput = {
    change_type?: NullableStringFieldUpdateOperationsInput | string | null
    changed_by_number?: NullableStringFieldUpdateOperationsInput | string | null
    old_name?: StringFieldUpdateOperationsInput | string
    new_name?: StringFieldUpdateOperationsInput | string
    old_email?: StringFieldUpdateOperationsInput | string
    new_email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    efis?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    date_time?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type audit_tableUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    change_type?: NullableStringFieldUpdateOperationsInput | string | null
    changed_by_number?: NullableStringFieldUpdateOperationsInput | string | null
    old_name?: StringFieldUpdateOperationsInput | string
    new_name?: StringFieldUpdateOperationsInput | string
    old_email?: StringFieldUpdateOperationsInput | string
    new_email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    efis?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    date_time?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type manager_dashboard_tblCreateInput = {
    REGION?: string | null
    DISTRICT?: string | null
    TRAM?: string | null
    EFIS?: string | null
    DEPUTY_NAME?: string | null
    DEPUTY_EMAIL?: string | null
    PRIN_UNIT?: string | null
    PRIN_EFIS?: string | null
    PRIN_NAME?: string | null
    PRIN_EMAIL?: string | null
    CHIEF_UNIT?: string | null
    CHIEF_EFIS?: string | null
    CHIEF_NAME?: string | null
    CHIEF_EMAIL?: string | null
    STE_UNIT?: string | null
    STE_EFIS?: string | null
    STE_NAME?: string | null
    STE_EMAIL?: string | null
  }

  export type manager_dashboard_tblUncheckedCreateInput = {
    REGION?: string | null
    DISTRICT?: string | null
    TRAM?: string | null
    EFIS?: string | null
    DEPUTY_NAME?: string | null
    DEPUTY_EMAIL?: string | null
    PRIN_UNIT?: string | null
    PRIN_EFIS?: string | null
    PRIN_NAME?: string | null
    PRIN_EMAIL?: string | null
    CHIEF_UNIT?: string | null
    CHIEF_EFIS?: string | null
    CHIEF_NAME?: string | null
    CHIEF_EMAIL?: string | null
    STE_UNIT?: string | null
    STE_EFIS?: string | null
    STE_NAME?: string | null
    STE_EMAIL?: string | null
    manager_dashboard_id?: number
  }

  export type manager_dashboard_tblUpdateInput = {
    REGION?: NullableStringFieldUpdateOperationsInput | string | null
    DISTRICT?: NullableStringFieldUpdateOperationsInput | string | null
    TRAM?: NullableStringFieldUpdateOperationsInput | string | null
    EFIS?: NullableStringFieldUpdateOperationsInput | string | null
    DEPUTY_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    DEPUTY_EMAIL?: NullableStringFieldUpdateOperationsInput | string | null
    PRIN_UNIT?: NullableStringFieldUpdateOperationsInput | string | null
    PRIN_EFIS?: NullableStringFieldUpdateOperationsInput | string | null
    PRIN_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    PRIN_EMAIL?: NullableStringFieldUpdateOperationsInput | string | null
    CHIEF_UNIT?: NullableStringFieldUpdateOperationsInput | string | null
    CHIEF_EFIS?: NullableStringFieldUpdateOperationsInput | string | null
    CHIEF_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    CHIEF_EMAIL?: NullableStringFieldUpdateOperationsInput | string | null
    STE_UNIT?: NullableStringFieldUpdateOperationsInput | string | null
    STE_EFIS?: NullableStringFieldUpdateOperationsInput | string | null
    STE_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    STE_EMAIL?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type manager_dashboard_tblUncheckedUpdateInput = {
    REGION?: NullableStringFieldUpdateOperationsInput | string | null
    DISTRICT?: NullableStringFieldUpdateOperationsInput | string | null
    TRAM?: NullableStringFieldUpdateOperationsInput | string | null
    EFIS?: NullableStringFieldUpdateOperationsInput | string | null
    DEPUTY_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    DEPUTY_EMAIL?: NullableStringFieldUpdateOperationsInput | string | null
    PRIN_UNIT?: NullableStringFieldUpdateOperationsInput | string | null
    PRIN_EFIS?: NullableStringFieldUpdateOperationsInput | string | null
    PRIN_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    PRIN_EMAIL?: NullableStringFieldUpdateOperationsInput | string | null
    CHIEF_UNIT?: NullableStringFieldUpdateOperationsInput | string | null
    CHIEF_EFIS?: NullableStringFieldUpdateOperationsInput | string | null
    CHIEF_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    CHIEF_EMAIL?: NullableStringFieldUpdateOperationsInput | string | null
    STE_UNIT?: NullableStringFieldUpdateOperationsInput | string | null
    STE_EFIS?: NullableStringFieldUpdateOperationsInput | string | null
    STE_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    STE_EMAIL?: NullableStringFieldUpdateOperationsInput | string | null
    manager_dashboard_id?: IntFieldUpdateOperationsInput | number
  }

  export type manager_dashboard_tblCreateManyInput = {
    REGION?: string | null
    DISTRICT?: string | null
    TRAM?: string | null
    EFIS?: string | null
    DEPUTY_NAME?: string | null
    DEPUTY_EMAIL?: string | null
    PRIN_UNIT?: string | null
    PRIN_EFIS?: string | null
    PRIN_NAME?: string | null
    PRIN_EMAIL?: string | null
    CHIEF_UNIT?: string | null
    CHIEF_EFIS?: string | null
    CHIEF_NAME?: string | null
    CHIEF_EMAIL?: string | null
    STE_UNIT?: string | null
    STE_EFIS?: string | null
    STE_NAME?: string | null
    STE_EMAIL?: string | null
    manager_dashboard_id?: number
  }

  export type manager_dashboard_tblUpdateManyMutationInput = {
    REGION?: NullableStringFieldUpdateOperationsInput | string | null
    DISTRICT?: NullableStringFieldUpdateOperationsInput | string | null
    TRAM?: NullableStringFieldUpdateOperationsInput | string | null
    EFIS?: NullableStringFieldUpdateOperationsInput | string | null
    DEPUTY_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    DEPUTY_EMAIL?: NullableStringFieldUpdateOperationsInput | string | null
    PRIN_UNIT?: NullableStringFieldUpdateOperationsInput | string | null
    PRIN_EFIS?: NullableStringFieldUpdateOperationsInput | string | null
    PRIN_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    PRIN_EMAIL?: NullableStringFieldUpdateOperationsInput | string | null
    CHIEF_UNIT?: NullableStringFieldUpdateOperationsInput | string | null
    CHIEF_EFIS?: NullableStringFieldUpdateOperationsInput | string | null
    CHIEF_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    CHIEF_EMAIL?: NullableStringFieldUpdateOperationsInput | string | null
    STE_UNIT?: NullableStringFieldUpdateOperationsInput | string | null
    STE_EFIS?: NullableStringFieldUpdateOperationsInput | string | null
    STE_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    STE_EMAIL?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type manager_dashboard_tblUncheckedUpdateManyInput = {
    REGION?: NullableStringFieldUpdateOperationsInput | string | null
    DISTRICT?: NullableStringFieldUpdateOperationsInput | string | null
    TRAM?: NullableStringFieldUpdateOperationsInput | string | null
    EFIS?: NullableStringFieldUpdateOperationsInput | string | null
    DEPUTY_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    DEPUTY_EMAIL?: NullableStringFieldUpdateOperationsInput | string | null
    PRIN_UNIT?: NullableStringFieldUpdateOperationsInput | string | null
    PRIN_EFIS?: NullableStringFieldUpdateOperationsInput | string | null
    PRIN_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    PRIN_EMAIL?: NullableStringFieldUpdateOperationsInput | string | null
    CHIEF_UNIT?: NullableStringFieldUpdateOperationsInput | string | null
    CHIEF_EFIS?: NullableStringFieldUpdateOperationsInput | string | null
    CHIEF_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    CHIEF_EMAIL?: NullableStringFieldUpdateOperationsInput | string | null
    STE_UNIT?: NullableStringFieldUpdateOperationsInput | string | null
    STE_EFIS?: NullableStringFieldUpdateOperationsInput | string | null
    STE_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    STE_EMAIL?: NullableStringFieldUpdateOperationsInput | string | null
    manager_dashboard_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type audit_superiorCountOrderByAggregateInput = {
    id?: SortOrder
    changed_by_number?: SortOrder
    changed_employee?: SortOrder
    changed_employee_role?: SortOrder
    changed_employee_efis?: SortOrder
    old_superior_name?: SortOrder
    old_superior_efis?: SortOrder
    new_superior_name?: SortOrder
    new_superior_efis?: SortOrder
    changed_on_date?: SortOrder
  }

  export type audit_superiorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type audit_superiorMaxOrderByAggregateInput = {
    id?: SortOrder
    changed_by_number?: SortOrder
    changed_employee?: SortOrder
    changed_employee_role?: SortOrder
    changed_employee_efis?: SortOrder
    old_superior_name?: SortOrder
    old_superior_efis?: SortOrder
    new_superior_name?: SortOrder
    new_superior_efis?: SortOrder
    changed_on_date?: SortOrder
  }

  export type audit_superiorMinOrderByAggregateInput = {
    id?: SortOrder
    changed_by_number?: SortOrder
    changed_employee?: SortOrder
    changed_employee_role?: SortOrder
    changed_employee_efis?: SortOrder
    old_superior_name?: SortOrder
    old_superior_efis?: SortOrder
    new_superior_name?: SortOrder
    new_superior_efis?: SortOrder
    changed_on_date?: SortOrder
  }

  export type audit_superiorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type audit_tableCountOrderByAggregateInput = {
    id?: SortOrder
    change_type?: SortOrder
    changed_by_number?: SortOrder
    old_name?: SortOrder
    new_name?: SortOrder
    old_email?: SortOrder
    new_email?: SortOrder
    role?: SortOrder
    efis?: SortOrder
    region?: SortOrder
    date_time?: SortOrder
  }

  export type audit_tableAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type audit_tableMaxOrderByAggregateInput = {
    id?: SortOrder
    change_type?: SortOrder
    changed_by_number?: SortOrder
    old_name?: SortOrder
    new_name?: SortOrder
    old_email?: SortOrder
    new_email?: SortOrder
    role?: SortOrder
    efis?: SortOrder
    region?: SortOrder
    date_time?: SortOrder
  }

  export type audit_tableMinOrderByAggregateInput = {
    id?: SortOrder
    change_type?: SortOrder
    changed_by_number?: SortOrder
    old_name?: SortOrder
    new_name?: SortOrder
    old_email?: SortOrder
    new_email?: SortOrder
    role?: SortOrder
    efis?: SortOrder
    region?: SortOrder
    date_time?: SortOrder
  }

  export type audit_tableSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type manager_dashboard_tblCountOrderByAggregateInput = {
    REGION?: SortOrder
    DISTRICT?: SortOrder
    TRAM?: SortOrder
    EFIS?: SortOrder
    DEPUTY_NAME?: SortOrder
    DEPUTY_EMAIL?: SortOrder
    PRIN_UNIT?: SortOrder
    PRIN_EFIS?: SortOrder
    PRIN_NAME?: SortOrder
    PRIN_EMAIL?: SortOrder
    CHIEF_UNIT?: SortOrder
    CHIEF_EFIS?: SortOrder
    CHIEF_NAME?: SortOrder
    CHIEF_EMAIL?: SortOrder
    STE_UNIT?: SortOrder
    STE_EFIS?: SortOrder
    STE_NAME?: SortOrder
    STE_EMAIL?: SortOrder
    manager_dashboard_id?: SortOrder
  }

  export type manager_dashboard_tblAvgOrderByAggregateInput = {
    manager_dashboard_id?: SortOrder
  }

  export type manager_dashboard_tblMaxOrderByAggregateInput = {
    REGION?: SortOrder
    DISTRICT?: SortOrder
    TRAM?: SortOrder
    EFIS?: SortOrder
    DEPUTY_NAME?: SortOrder
    DEPUTY_EMAIL?: SortOrder
    PRIN_UNIT?: SortOrder
    PRIN_EFIS?: SortOrder
    PRIN_NAME?: SortOrder
    PRIN_EMAIL?: SortOrder
    CHIEF_UNIT?: SortOrder
    CHIEF_EFIS?: SortOrder
    CHIEF_NAME?: SortOrder
    CHIEF_EMAIL?: SortOrder
    STE_UNIT?: SortOrder
    STE_EFIS?: SortOrder
    STE_NAME?: SortOrder
    STE_EMAIL?: SortOrder
    manager_dashboard_id?: SortOrder
  }

  export type manager_dashboard_tblMinOrderByAggregateInput = {
    REGION?: SortOrder
    DISTRICT?: SortOrder
    TRAM?: SortOrder
    EFIS?: SortOrder
    DEPUTY_NAME?: SortOrder
    DEPUTY_EMAIL?: SortOrder
    PRIN_UNIT?: SortOrder
    PRIN_EFIS?: SortOrder
    PRIN_NAME?: SortOrder
    PRIN_EMAIL?: SortOrder
    CHIEF_UNIT?: SortOrder
    CHIEF_EFIS?: SortOrder
    CHIEF_NAME?: SortOrder
    CHIEF_EMAIL?: SortOrder
    STE_UNIT?: SortOrder
    STE_EFIS?: SortOrder
    STE_NAME?: SortOrder
    STE_EMAIL?: SortOrder
    manager_dashboard_id?: SortOrder
  }

  export type manager_dashboard_tblSumOrderByAggregateInput = {
    manager_dashboard_id?: SortOrder
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}