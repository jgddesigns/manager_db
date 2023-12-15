
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
 * Model user_session
 * 
 */
export type user_session = {
  id: number
  LoggedIn_session: number
  Week_In_session_id: number
  Project_In_session_id: number
  LoggedIn_cookie: string
  Last_loggedIn: Date
  addReport_form_tmp_json: string
  createReport_form_tmp_json: string
  on_time_alert_onupdate: number
}

/**
 * Model users
 * 
 */
export type users = {
  id: number
  emp_num: string
  first_name: string
  last_name: string
  role: string
  password: string
  email_address: string
  created_at: Date
  last_logged_in: Date
  deactivated: boolean
  onetime_survey: boolean
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more User_sessions
 * const user_sessions = await prisma.user_session.findMany()
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
   * // Fetch zero or more User_sessions
   * const user_sessions = await prisma.user_session.findMany()
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
   * `prisma.user_session`: Exposes CRUD operations for the **user_session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_sessions
    * const user_sessions = await prisma.user_session.findMany()
    * ```
    */
  get user_session(): Prisma.user_sessionDelegate<GlobalReject>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<GlobalReject>;
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
    user_session: 'user_session',
    users: 'users'
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
   * Model user_session
   */


  export type AggregateUser_session = {
    _count: User_sessionCountAggregateOutputType | null
    _avg: User_sessionAvgAggregateOutputType | null
    _sum: User_sessionSumAggregateOutputType | null
    _min: User_sessionMinAggregateOutputType | null
    _max: User_sessionMaxAggregateOutputType | null
  }

  export type User_sessionAvgAggregateOutputType = {
    id: number | null
    LoggedIn_session: number | null
    Week_In_session_id: number | null
    Project_In_session_id: number | null
    on_time_alert_onupdate: number | null
  }

  export type User_sessionSumAggregateOutputType = {
    id: number | null
    LoggedIn_session: number | null
    Week_In_session_id: number | null
    Project_In_session_id: number | null
    on_time_alert_onupdate: number | null
  }

  export type User_sessionMinAggregateOutputType = {
    id: number | null
    LoggedIn_session: number | null
    Week_In_session_id: number | null
    Project_In_session_id: number | null
    LoggedIn_cookie: string | null
    Last_loggedIn: Date | null
    addReport_form_tmp_json: string | null
    createReport_form_tmp_json: string | null
    on_time_alert_onupdate: number | null
  }

  export type User_sessionMaxAggregateOutputType = {
    id: number | null
    LoggedIn_session: number | null
    Week_In_session_id: number | null
    Project_In_session_id: number | null
    LoggedIn_cookie: string | null
    Last_loggedIn: Date | null
    addReport_form_tmp_json: string | null
    createReport_form_tmp_json: string | null
    on_time_alert_onupdate: number | null
  }

  export type User_sessionCountAggregateOutputType = {
    id: number
    LoggedIn_session: number
    Week_In_session_id: number
    Project_In_session_id: number
    LoggedIn_cookie: number
    Last_loggedIn: number
    addReport_form_tmp_json: number
    createReport_form_tmp_json: number
    on_time_alert_onupdate: number
    _all: number
  }


  export type User_sessionAvgAggregateInputType = {
    id?: true
    LoggedIn_session?: true
    Week_In_session_id?: true
    Project_In_session_id?: true
    on_time_alert_onupdate?: true
  }

  export type User_sessionSumAggregateInputType = {
    id?: true
    LoggedIn_session?: true
    Week_In_session_id?: true
    Project_In_session_id?: true
    on_time_alert_onupdate?: true
  }

  export type User_sessionMinAggregateInputType = {
    id?: true
    LoggedIn_session?: true
    Week_In_session_id?: true
    Project_In_session_id?: true
    LoggedIn_cookie?: true
    Last_loggedIn?: true
    addReport_form_tmp_json?: true
    createReport_form_tmp_json?: true
    on_time_alert_onupdate?: true
  }

  export type User_sessionMaxAggregateInputType = {
    id?: true
    LoggedIn_session?: true
    Week_In_session_id?: true
    Project_In_session_id?: true
    LoggedIn_cookie?: true
    Last_loggedIn?: true
    addReport_form_tmp_json?: true
    createReport_form_tmp_json?: true
    on_time_alert_onupdate?: true
  }

  export type User_sessionCountAggregateInputType = {
    id?: true
    LoggedIn_session?: true
    Week_In_session_id?: true
    Project_In_session_id?: true
    LoggedIn_cookie?: true
    Last_loggedIn?: true
    addReport_form_tmp_json?: true
    createReport_form_tmp_json?: true
    on_time_alert_onupdate?: true
    _all?: true
  }

  export type User_sessionAggregateArgs = {
    /**
     * Filter which user_session to aggregate.
     * 
    **/
    where?: user_sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<user_sessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: user_sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_sessions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_sessions
    **/
    _count?: true | User_sessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_sessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_sessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_sessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_sessionMaxAggregateInputType
  }

  export type GetUser_sessionAggregateType<T extends User_sessionAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_session]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_session[P]>
      : GetScalarType<T[P], AggregateUser_session[P]>
  }




  export type User_sessionGroupByArgs = {
    where?: user_sessionWhereInput
    orderBy?: Enumerable<user_sessionOrderByWithAggregationInput>
    by: Array<User_sessionScalarFieldEnum>
    having?: user_sessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_sessionCountAggregateInputType | true
    _avg?: User_sessionAvgAggregateInputType
    _sum?: User_sessionSumAggregateInputType
    _min?: User_sessionMinAggregateInputType
    _max?: User_sessionMaxAggregateInputType
  }


  export type User_sessionGroupByOutputType = {
    id: number
    LoggedIn_session: number
    Week_In_session_id: number
    Project_In_session_id: number
    LoggedIn_cookie: string
    Last_loggedIn: Date
    addReport_form_tmp_json: string
    createReport_form_tmp_json: string
    on_time_alert_onupdate: number
    _count: User_sessionCountAggregateOutputType | null
    _avg: User_sessionAvgAggregateOutputType | null
    _sum: User_sessionSumAggregateOutputType | null
    _min: User_sessionMinAggregateOutputType | null
    _max: User_sessionMaxAggregateOutputType | null
  }

  type GetUser_sessionGroupByPayload<T extends User_sessionGroupByArgs> = PrismaPromise<
    Array<
      PickArray<User_sessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_sessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_sessionGroupByOutputType[P]>
            : GetScalarType<T[P], User_sessionGroupByOutputType[P]>
        }
      >
    >


  export type user_sessionSelect = {
    id?: boolean
    LoggedIn_session?: boolean
    Week_In_session_id?: boolean
    Project_In_session_id?: boolean
    LoggedIn_cookie?: boolean
    Last_loggedIn?: boolean
    addReport_form_tmp_json?: boolean
    createReport_form_tmp_json?: boolean
    on_time_alert_onupdate?: boolean
  }

  export type user_sessionGetPayload<
    S extends boolean | null | undefined | user_sessionArgs,
    U = keyof S
      > = S extends true
        ? user_session
    : S extends undefined
    ? never
    : S extends user_sessionArgs | user_sessionFindManyArgs
    ?'include' extends U
    ? user_session 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof user_session ? user_session[P] : never
  } 
    : user_session
  : user_session


  type user_sessionCountArgs = Merge<
    Omit<user_sessionFindManyArgs, 'select' | 'include'> & {
      select?: User_sessionCountAggregateInputType | true
    }
  >

  export interface user_sessionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User_session that matches the filter.
     * @param {user_sessionFindUniqueArgs} args - Arguments to find a User_session
     * @example
     * // Get one User_session
     * const user_session = await prisma.user_session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends user_sessionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, user_sessionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'user_session'> extends True ? CheckSelect<T, Prisma__user_sessionClient<user_session>, Prisma__user_sessionClient<user_sessionGetPayload<T>>> : CheckSelect<T, Prisma__user_sessionClient<user_session | null >, Prisma__user_sessionClient<user_sessionGetPayload<T> | null >>

    /**
     * Find the first User_session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_sessionFindFirstArgs} args - Arguments to find a User_session
     * @example
     * // Get one User_session
     * const user_session = await prisma.user_session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends user_sessionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, user_sessionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'user_session'> extends True ? CheckSelect<T, Prisma__user_sessionClient<user_session>, Prisma__user_sessionClient<user_sessionGetPayload<T>>> : CheckSelect<T, Prisma__user_sessionClient<user_session | null >, Prisma__user_sessionClient<user_sessionGetPayload<T> | null >>

    /**
     * Find zero or more User_sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_sessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_sessions
     * const user_sessions = await prisma.user_session.findMany()
     * 
     * // Get first 10 User_sessions
     * const user_sessions = await prisma.user_session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_sessionWithIdOnly = await prisma.user_session.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends user_sessionFindManyArgs>(
      args?: SelectSubset<T, user_sessionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<user_session>>, PrismaPromise<Array<user_sessionGetPayload<T>>>>

    /**
     * Create a User_session.
     * @param {user_sessionCreateArgs} args - Arguments to create a User_session.
     * @example
     * // Create one User_session
     * const User_session = await prisma.user_session.create({
     *   data: {
     *     // ... data to create a User_session
     *   }
     * })
     * 
    **/
    create<T extends user_sessionCreateArgs>(
      args: SelectSubset<T, user_sessionCreateArgs>
    ): CheckSelect<T, Prisma__user_sessionClient<user_session>, Prisma__user_sessionClient<user_sessionGetPayload<T>>>

    /**
     * Create many User_sessions.
     *     @param {user_sessionCreateManyArgs} args - Arguments to create many User_sessions.
     *     @example
     *     // Create many User_sessions
     *     const user_session = await prisma.user_session.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends user_sessionCreateManyArgs>(
      args?: SelectSubset<T, user_sessionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User_session.
     * @param {user_sessionDeleteArgs} args - Arguments to delete one User_session.
     * @example
     * // Delete one User_session
     * const User_session = await prisma.user_session.delete({
     *   where: {
     *     // ... filter to delete one User_session
     *   }
     * })
     * 
    **/
    delete<T extends user_sessionDeleteArgs>(
      args: SelectSubset<T, user_sessionDeleteArgs>
    ): CheckSelect<T, Prisma__user_sessionClient<user_session>, Prisma__user_sessionClient<user_sessionGetPayload<T>>>

    /**
     * Update one User_session.
     * @param {user_sessionUpdateArgs} args - Arguments to update one User_session.
     * @example
     * // Update one User_session
     * const user_session = await prisma.user_session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends user_sessionUpdateArgs>(
      args: SelectSubset<T, user_sessionUpdateArgs>
    ): CheckSelect<T, Prisma__user_sessionClient<user_session>, Prisma__user_sessionClient<user_sessionGetPayload<T>>>

    /**
     * Delete zero or more User_sessions.
     * @param {user_sessionDeleteManyArgs} args - Arguments to filter User_sessions to delete.
     * @example
     * // Delete a few User_sessions
     * const { count } = await prisma.user_session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends user_sessionDeleteManyArgs>(
      args?: SelectSubset<T, user_sessionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_sessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_sessions
     * const user_session = await prisma.user_session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends user_sessionUpdateManyArgs>(
      args: SelectSubset<T, user_sessionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User_session.
     * @param {user_sessionUpsertArgs} args - Arguments to update or create a User_session.
     * @example
     * // Update or create a User_session
     * const user_session = await prisma.user_session.upsert({
     *   create: {
     *     // ... data to create a User_session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_session we want to update
     *   }
     * })
    **/
    upsert<T extends user_sessionUpsertArgs>(
      args: SelectSubset<T, user_sessionUpsertArgs>
    ): CheckSelect<T, Prisma__user_sessionClient<user_session>, Prisma__user_sessionClient<user_sessionGetPayload<T>>>

    /**
     * Find one User_session that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {user_sessionFindUniqueOrThrowArgs} args - Arguments to find a User_session
     * @example
     * // Get one User_session
     * const user_session = await prisma.user_session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends user_sessionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, user_sessionFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__user_sessionClient<user_session>, Prisma__user_sessionClient<user_sessionGetPayload<T>>>

    /**
     * Find the first User_session that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_sessionFindFirstOrThrowArgs} args - Arguments to find a User_session
     * @example
     * // Get one User_session
     * const user_session = await prisma.user_session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends user_sessionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, user_sessionFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__user_sessionClient<user_session>, Prisma__user_sessionClient<user_sessionGetPayload<T>>>

    /**
     * Count the number of User_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_sessionCountArgs} args - Arguments to filter User_sessions to count.
     * @example
     * // Count the number of User_sessions
     * const count = await prisma.user_session.count({
     *   where: {
     *     // ... the filter for the User_sessions we want to count
     *   }
     * })
    **/
    count<T extends user_sessionCountArgs>(
      args?: Subset<T, user_sessionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_sessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_sessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_sessionAggregateArgs>(args: Subset<T, User_sessionAggregateArgs>): PrismaPromise<GetUser_sessionAggregateType<T>>

    /**
     * Group by User_session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_sessionGroupByArgs} args - Group by arguments.
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
      T extends User_sessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: User_sessionGroupByArgs['orderBy'] }
        : { orderBy?: User_sessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, User_sessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_sessionGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__user_sessionClient<T> implements PrismaPromise<T> {
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
   * user_session base type for findUnique actions
   */
  export type user_sessionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the user_session
     * 
    **/
    select?: user_sessionSelect | null
    /**
     * Filter, which user_session to fetch.
     * 
    **/
    where: user_sessionWhereUniqueInput
  }

  /**
   * user_session: findUnique
   */
  export interface user_sessionFindUniqueArgs extends user_sessionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * user_session base type for findFirst actions
   */
  export type user_sessionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the user_session
     * 
    **/
    select?: user_sessionSelect | null
    /**
     * Filter, which user_session to fetch.
     * 
    **/
    where?: user_sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<user_sessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_sessions.
     * 
    **/
    cursor?: user_sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_sessions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_sessions.
     * 
    **/
    distinct?: Enumerable<User_sessionScalarFieldEnum>
  }

  /**
   * user_session: findFirst
   */
  export interface user_sessionFindFirstArgs extends user_sessionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * user_session findMany
   */
  export type user_sessionFindManyArgs = {
    /**
     * Select specific fields to fetch from the user_session
     * 
    **/
    select?: user_sessionSelect | null
    /**
     * Filter, which user_sessions to fetch.
     * 
    **/
    where?: user_sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<user_sessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_sessions.
     * 
    **/
    cursor?: user_sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_sessions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<User_sessionScalarFieldEnum>
  }


  /**
   * user_session create
   */
  export type user_sessionCreateArgs = {
    /**
     * Select specific fields to fetch from the user_session
     * 
    **/
    select?: user_sessionSelect | null
    /**
     * The data needed to create a user_session.
     * 
    **/
    data: XOR<user_sessionCreateInput, user_sessionUncheckedCreateInput>
  }


  /**
   * user_session createMany
   */
  export type user_sessionCreateManyArgs = {
    /**
     * The data used to create many user_sessions.
     * 
    **/
    data: Enumerable<user_sessionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * user_session update
   */
  export type user_sessionUpdateArgs = {
    /**
     * Select specific fields to fetch from the user_session
     * 
    **/
    select?: user_sessionSelect | null
    /**
     * The data needed to update a user_session.
     * 
    **/
    data: XOR<user_sessionUpdateInput, user_sessionUncheckedUpdateInput>
    /**
     * Choose, which user_session to update.
     * 
    **/
    where: user_sessionWhereUniqueInput
  }


  /**
   * user_session updateMany
   */
  export type user_sessionUpdateManyArgs = {
    /**
     * The data used to update user_sessions.
     * 
    **/
    data: XOR<user_sessionUpdateManyMutationInput, user_sessionUncheckedUpdateManyInput>
    /**
     * Filter which user_sessions to update
     * 
    **/
    where?: user_sessionWhereInput
  }


  /**
   * user_session upsert
   */
  export type user_sessionUpsertArgs = {
    /**
     * Select specific fields to fetch from the user_session
     * 
    **/
    select?: user_sessionSelect | null
    /**
     * The filter to search for the user_session to update in case it exists.
     * 
    **/
    where: user_sessionWhereUniqueInput
    /**
     * In case the user_session found by the `where` argument doesn't exist, create a new user_session with this data.
     * 
    **/
    create: XOR<user_sessionCreateInput, user_sessionUncheckedCreateInput>
    /**
     * In case the user_session was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<user_sessionUpdateInput, user_sessionUncheckedUpdateInput>
  }


  /**
   * user_session delete
   */
  export type user_sessionDeleteArgs = {
    /**
     * Select specific fields to fetch from the user_session
     * 
    **/
    select?: user_sessionSelect | null
    /**
     * Filter which user_session to delete.
     * 
    **/
    where: user_sessionWhereUniqueInput
  }


  /**
   * user_session deleteMany
   */
  export type user_sessionDeleteManyArgs = {
    /**
     * Filter which user_sessions to delete
     * 
    **/
    where?: user_sessionWhereInput
  }


  /**
   * user_session: findUniqueOrThrow
   */
  export type user_sessionFindUniqueOrThrowArgs = user_sessionFindUniqueArgsBase
      

  /**
   * user_session: findFirstOrThrow
   */
  export type user_sessionFindFirstOrThrowArgs = user_sessionFindFirstArgsBase
      

  /**
   * user_session without action
   */
  export type user_sessionArgs = {
    /**
     * Select specific fields to fetch from the user_session
     * 
    **/
    select?: user_sessionSelect | null
  }



  /**
   * Model users
   */


  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    emp_num: string | null
    first_name: string | null
    last_name: string | null
    role: string | null
    password: string | null
    email_address: string | null
    created_at: Date | null
    last_logged_in: Date | null
    deactivated: boolean | null
    onetime_survey: boolean | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    emp_num: string | null
    first_name: string | null
    last_name: string | null
    role: string | null
    password: string | null
    email_address: string | null
    created_at: Date | null
    last_logged_in: Date | null
    deactivated: boolean | null
    onetime_survey: boolean | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    emp_num: number
    first_name: number
    last_name: number
    role: number
    password: number
    email_address: number
    created_at: number
    last_logged_in: number
    deactivated: number
    onetime_survey: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    emp_num?: true
    first_name?: true
    last_name?: true
    role?: true
    password?: true
    email_address?: true
    created_at?: true
    last_logged_in?: true
    deactivated?: true
    onetime_survey?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    emp_num?: true
    first_name?: true
    last_name?: true
    role?: true
    password?: true
    email_address?: true
    created_at?: true
    last_logged_in?: true
    deactivated?: true
    onetime_survey?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    emp_num?: true
    first_name?: true
    last_name?: true
    role?: true
    password?: true
    email_address?: true
    created_at?: true
    last_logged_in?: true
    deactivated?: true
    onetime_survey?: true
    _all?: true
  }

  export type UsersAggregateArgs = {
    /**
     * Filter which users to aggregate.
     * 
    **/
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     * 
    **/
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs = {
    where?: usersWhereInput
    orderBy?: Enumerable<usersOrderByWithAggregationInput>
    by: Array<UsersScalarFieldEnum>
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }


  export type UsersGroupByOutputType = {
    id: number
    emp_num: string
    first_name: string
    last_name: string
    role: string
    password: string
    email_address: string
    created_at: Date
    last_logged_in: Date
    deactivated: boolean
    onetime_survey: boolean
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect = {
    id?: boolean
    emp_num?: boolean
    first_name?: boolean
    last_name?: boolean
    role?: boolean
    password?: boolean
    email_address?: boolean
    created_at?: boolean
    last_logged_in?: boolean
    deactivated?: boolean
    onetime_survey?: boolean
  }

  export type usersGetPayload<
    S extends boolean | null | undefined | usersArgs,
    U = keyof S
      > = S extends true
        ? users
    : S extends undefined
    ? never
    : S extends usersArgs | usersFindManyArgs
    ?'include' extends U
    ? users 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof users ? users[P] : never
  } 
    : users
  : users


  type usersCountArgs = Merge<
    Omit<usersFindManyArgs, 'select' | 'include'> & {
      select?: UsersCountAggregateInputType | true
    }
  >

  export interface usersDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, usersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'users'> extends True ? CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>> : CheckSelect<T, Prisma__usersClient<users | null >, Prisma__usersClient<usersGetPayload<T> | null >>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, usersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'users'> extends True ? CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>> : CheckSelect<T, Prisma__usersClient<users | null >, Prisma__usersClient<usersGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends usersFindManyArgs>(
      args?: SelectSubset<T, usersFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<users>>, PrismaPromise<Array<usersGetPayload<T>>>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends usersCreateArgs>(
      args: SelectSubset<T, usersCreateArgs>
    ): CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {usersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usersCreateManyArgs>(
      args?: SelectSubset<T, usersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends usersDeleteArgs>(
      args: SelectSubset<T, usersDeleteArgs>
    ): CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usersUpdateArgs>(
      args: SelectSubset<T, usersUpdateArgs>
    ): CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usersDeleteManyArgs>(
      args?: SelectSubset<T, usersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usersUpdateManyArgs>(
      args: SelectSubset<T, usersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends usersUpsertArgs>(
      args: SelectSubset<T, usersUpsertArgs>
    ): CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>>

    /**
     * Find one Users that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, usersFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>>

    /**
     * Find the first Users that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, usersFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__usersClient<T> implements PrismaPromise<T> {
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
   * users base type for findUnique actions
   */
  export type usersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Filter, which users to fetch.
     * 
    **/
    where: usersWhereUniqueInput
  }

  /**
   * users: findUnique
   */
  export interface usersFindUniqueArgs extends usersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * users base type for findFirst actions
   */
  export type usersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Filter, which users to fetch.
     * 
    **/
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     * 
    **/
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     * 
    **/
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     * 
    **/
    distinct?: Enumerable<UsersScalarFieldEnum>
  }

  /**
   * users: findFirst
   */
  export interface usersFindFirstArgs extends usersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * users findMany
   */
  export type usersFindManyArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Filter, which users to fetch.
     * 
    **/
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     * 
    **/
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     * 
    **/
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * users create
   */
  export type usersCreateArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * The data needed to create a users.
     * 
    **/
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }


  /**
   * users createMany
   */
  export type usersCreateManyArgs = {
    /**
     * The data used to create many users.
     * 
    **/
    data: Enumerable<usersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * users update
   */
  export type usersUpdateArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * The data needed to update a users.
     * 
    **/
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     * 
    **/
    where: usersWhereUniqueInput
  }


  /**
   * users updateMany
   */
  export type usersUpdateManyArgs = {
    /**
     * The data used to update users.
     * 
    **/
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     * 
    **/
    where?: usersWhereInput
  }


  /**
   * users upsert
   */
  export type usersUpsertArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * The filter to search for the users to update in case it exists.
     * 
    **/
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     * 
    **/
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }


  /**
   * users delete
   */
  export type usersDeleteArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Filter which users to delete.
     * 
    **/
    where: usersWhereUniqueInput
  }


  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs = {
    /**
     * Filter which users to delete
     * 
    **/
    where?: usersWhereInput
  }


  /**
   * users: findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs = usersFindUniqueArgsBase
      

  /**
   * users: findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs = usersFindFirstArgsBase
      

  /**
   * users without action
   */
  export type usersArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const User_sessionScalarFieldEnum: {
    id: 'id',
    LoggedIn_session: 'LoggedIn_session',
    Week_In_session_id: 'Week_In_session_id',
    Project_In_session_id: 'Project_In_session_id',
    LoggedIn_cookie: 'LoggedIn_cookie',
    Last_loggedIn: 'Last_loggedIn',
    addReport_form_tmp_json: 'addReport_form_tmp_json',
    createReport_form_tmp_json: 'createReport_form_tmp_json',
    on_time_alert_onupdate: 'on_time_alert_onupdate'
  };

  export type User_sessionScalarFieldEnum = (typeof User_sessionScalarFieldEnum)[keyof typeof User_sessionScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    emp_num: 'emp_num',
    first_name: 'first_name',
    last_name: 'last_name',
    role: 'role',
    password: 'password',
    email_address: 'email_address',
    created_at: 'created_at',
    last_logged_in: 'last_logged_in',
    deactivated: 'deactivated',
    onetime_survey: 'onetime_survey'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Deep Input Types
   */


  export type user_sessionWhereInput = {
    AND?: Enumerable<user_sessionWhereInput>
    OR?: Enumerable<user_sessionWhereInput>
    NOT?: Enumerable<user_sessionWhereInput>
    id?: IntFilter | number
    LoggedIn_session?: IntFilter | number
    Week_In_session_id?: IntFilter | number
    Project_In_session_id?: IntFilter | number
    LoggedIn_cookie?: StringFilter | string
    Last_loggedIn?: DateTimeFilter | Date | string
    addReport_form_tmp_json?: StringFilter | string
    createReport_form_tmp_json?: StringFilter | string
    on_time_alert_onupdate?: IntFilter | number
  }

  export type user_sessionOrderByWithRelationInput = {
    id?: SortOrder
    LoggedIn_session?: SortOrder
    Week_In_session_id?: SortOrder
    Project_In_session_id?: SortOrder
    LoggedIn_cookie?: SortOrder
    Last_loggedIn?: SortOrder
    addReport_form_tmp_json?: SortOrder
    createReport_form_tmp_json?: SortOrder
    on_time_alert_onupdate?: SortOrder
  }

  export type user_sessionWhereUniqueInput = {
    id?: number
  }

  export type user_sessionOrderByWithAggregationInput = {
    id?: SortOrder
    LoggedIn_session?: SortOrder
    Week_In_session_id?: SortOrder
    Project_In_session_id?: SortOrder
    LoggedIn_cookie?: SortOrder
    Last_loggedIn?: SortOrder
    addReport_form_tmp_json?: SortOrder
    createReport_form_tmp_json?: SortOrder
    on_time_alert_onupdate?: SortOrder
    _count?: user_sessionCountOrderByAggregateInput
    _avg?: user_sessionAvgOrderByAggregateInput
    _max?: user_sessionMaxOrderByAggregateInput
    _min?: user_sessionMinOrderByAggregateInput
    _sum?: user_sessionSumOrderByAggregateInput
  }

  export type user_sessionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<user_sessionScalarWhereWithAggregatesInput>
    OR?: Enumerable<user_sessionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<user_sessionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    LoggedIn_session?: IntWithAggregatesFilter | number
    Week_In_session_id?: IntWithAggregatesFilter | number
    Project_In_session_id?: IntWithAggregatesFilter | number
    LoggedIn_cookie?: StringWithAggregatesFilter | string
    Last_loggedIn?: DateTimeWithAggregatesFilter | Date | string
    addReport_form_tmp_json?: StringWithAggregatesFilter | string
    createReport_form_tmp_json?: StringWithAggregatesFilter | string
    on_time_alert_onupdate?: IntWithAggregatesFilter | number
  }

  export type usersWhereInput = {
    AND?: Enumerable<usersWhereInput>
    OR?: Enumerable<usersWhereInput>
    NOT?: Enumerable<usersWhereInput>
    id?: IntFilter | number
    emp_num?: StringFilter | string
    first_name?: StringFilter | string
    last_name?: StringFilter | string
    role?: StringFilter | string
    password?: StringFilter | string
    email_address?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    last_logged_in?: DateTimeFilter | Date | string
    deactivated?: BoolFilter | boolean
    onetime_survey?: BoolFilter | boolean
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    emp_num?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    role?: SortOrder
    password?: SortOrder
    email_address?: SortOrder
    created_at?: SortOrder
    last_logged_in?: SortOrder
    deactivated?: SortOrder
    onetime_survey?: SortOrder
  }

  export type usersWhereUniqueInput = {
    id?: number
  }

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    emp_num?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    role?: SortOrder
    password?: SortOrder
    email_address?: SortOrder
    created_at?: SortOrder
    last_logged_in?: SortOrder
    deactivated?: SortOrder
    onetime_survey?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<usersScalarWhereWithAggregatesInput>
    OR?: Enumerable<usersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<usersScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    emp_num?: StringWithAggregatesFilter | string
    first_name?: StringWithAggregatesFilter | string
    last_name?: StringWithAggregatesFilter | string
    role?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    email_address?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    last_logged_in?: DateTimeWithAggregatesFilter | Date | string
    deactivated?: BoolWithAggregatesFilter | boolean
    onetime_survey?: BoolWithAggregatesFilter | boolean
  }

  export type user_sessionCreateInput = {
    LoggedIn_session: number
    Week_In_session_id: number
    Project_In_session_id: number
    LoggedIn_cookie: string
    Last_loggedIn: Date | string
    addReport_form_tmp_json: string
    createReport_form_tmp_json: string
    on_time_alert_onupdate?: number
  }

  export type user_sessionUncheckedCreateInput = {
    id?: number
    LoggedIn_session: number
    Week_In_session_id: number
    Project_In_session_id: number
    LoggedIn_cookie: string
    Last_loggedIn: Date | string
    addReport_form_tmp_json: string
    createReport_form_tmp_json: string
    on_time_alert_onupdate?: number
  }

  export type user_sessionUpdateInput = {
    LoggedIn_session?: IntFieldUpdateOperationsInput | number
    Week_In_session_id?: IntFieldUpdateOperationsInput | number
    Project_In_session_id?: IntFieldUpdateOperationsInput | number
    LoggedIn_cookie?: StringFieldUpdateOperationsInput | string
    Last_loggedIn?: DateTimeFieldUpdateOperationsInput | Date | string
    addReport_form_tmp_json?: StringFieldUpdateOperationsInput | string
    createReport_form_tmp_json?: StringFieldUpdateOperationsInput | string
    on_time_alert_onupdate?: IntFieldUpdateOperationsInput | number
  }

  export type user_sessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    LoggedIn_session?: IntFieldUpdateOperationsInput | number
    Week_In_session_id?: IntFieldUpdateOperationsInput | number
    Project_In_session_id?: IntFieldUpdateOperationsInput | number
    LoggedIn_cookie?: StringFieldUpdateOperationsInput | string
    Last_loggedIn?: DateTimeFieldUpdateOperationsInput | Date | string
    addReport_form_tmp_json?: StringFieldUpdateOperationsInput | string
    createReport_form_tmp_json?: StringFieldUpdateOperationsInput | string
    on_time_alert_onupdate?: IntFieldUpdateOperationsInput | number
  }

  export type user_sessionCreateManyInput = {
    id?: number
    LoggedIn_session: number
    Week_In_session_id: number
    Project_In_session_id: number
    LoggedIn_cookie: string
    Last_loggedIn: Date | string
    addReport_form_tmp_json: string
    createReport_form_tmp_json: string
    on_time_alert_onupdate?: number
  }

  export type user_sessionUpdateManyMutationInput = {
    LoggedIn_session?: IntFieldUpdateOperationsInput | number
    Week_In_session_id?: IntFieldUpdateOperationsInput | number
    Project_In_session_id?: IntFieldUpdateOperationsInput | number
    LoggedIn_cookie?: StringFieldUpdateOperationsInput | string
    Last_loggedIn?: DateTimeFieldUpdateOperationsInput | Date | string
    addReport_form_tmp_json?: StringFieldUpdateOperationsInput | string
    createReport_form_tmp_json?: StringFieldUpdateOperationsInput | string
    on_time_alert_onupdate?: IntFieldUpdateOperationsInput | number
  }

  export type user_sessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    LoggedIn_session?: IntFieldUpdateOperationsInput | number
    Week_In_session_id?: IntFieldUpdateOperationsInput | number
    Project_In_session_id?: IntFieldUpdateOperationsInput | number
    LoggedIn_cookie?: StringFieldUpdateOperationsInput | string
    Last_loggedIn?: DateTimeFieldUpdateOperationsInput | Date | string
    addReport_form_tmp_json?: StringFieldUpdateOperationsInput | string
    createReport_form_tmp_json?: StringFieldUpdateOperationsInput | string
    on_time_alert_onupdate?: IntFieldUpdateOperationsInput | number
  }

  export type usersCreateInput = {
    emp_num: string
    first_name: string
    last_name: string
    role?: string
    password: string
    email_address: string
    created_at?: Date | string
    last_logged_in?: Date | string
    deactivated?: boolean
    onetime_survey: boolean
  }

  export type usersUncheckedCreateInput = {
    id?: number
    emp_num: string
    first_name: string
    last_name: string
    role?: string
    password: string
    email_address: string
    created_at?: Date | string
    last_logged_in?: Date | string
    deactivated?: boolean
    onetime_survey: boolean
  }

  export type usersUpdateInput = {
    emp_num?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email_address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_logged_in?: DateTimeFieldUpdateOperationsInput | Date | string
    deactivated?: BoolFieldUpdateOperationsInput | boolean
    onetime_survey?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    emp_num?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email_address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_logged_in?: DateTimeFieldUpdateOperationsInput | Date | string
    deactivated?: BoolFieldUpdateOperationsInput | boolean
    onetime_survey?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usersCreateManyInput = {
    id?: number
    emp_num: string
    first_name: string
    last_name: string
    role?: string
    password: string
    email_address: string
    created_at?: Date | string
    last_logged_in?: Date | string
    deactivated?: boolean
    onetime_survey: boolean
  }

  export type usersUpdateManyMutationInput = {
    emp_num?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email_address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_logged_in?: DateTimeFieldUpdateOperationsInput | Date | string
    deactivated?: BoolFieldUpdateOperationsInput | boolean
    onetime_survey?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    emp_num?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email_address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_logged_in?: DateTimeFieldUpdateOperationsInput | Date | string
    deactivated?: BoolFieldUpdateOperationsInput | boolean
    onetime_survey?: BoolFieldUpdateOperationsInput | boolean
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

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type user_sessionCountOrderByAggregateInput = {
    id?: SortOrder
    LoggedIn_session?: SortOrder
    Week_In_session_id?: SortOrder
    Project_In_session_id?: SortOrder
    LoggedIn_cookie?: SortOrder
    Last_loggedIn?: SortOrder
    addReport_form_tmp_json?: SortOrder
    createReport_form_tmp_json?: SortOrder
    on_time_alert_onupdate?: SortOrder
  }

  export type user_sessionAvgOrderByAggregateInput = {
    id?: SortOrder
    LoggedIn_session?: SortOrder
    Week_In_session_id?: SortOrder
    Project_In_session_id?: SortOrder
    on_time_alert_onupdate?: SortOrder
  }

  export type user_sessionMaxOrderByAggregateInput = {
    id?: SortOrder
    LoggedIn_session?: SortOrder
    Week_In_session_id?: SortOrder
    Project_In_session_id?: SortOrder
    LoggedIn_cookie?: SortOrder
    Last_loggedIn?: SortOrder
    addReport_form_tmp_json?: SortOrder
    createReport_form_tmp_json?: SortOrder
    on_time_alert_onupdate?: SortOrder
  }

  export type user_sessionMinOrderByAggregateInput = {
    id?: SortOrder
    LoggedIn_session?: SortOrder
    Week_In_session_id?: SortOrder
    Project_In_session_id?: SortOrder
    LoggedIn_cookie?: SortOrder
    Last_loggedIn?: SortOrder
    addReport_form_tmp_json?: SortOrder
    createReport_form_tmp_json?: SortOrder
    on_time_alert_onupdate?: SortOrder
  }

  export type user_sessionSumOrderByAggregateInput = {
    id?: SortOrder
    LoggedIn_session?: SortOrder
    Week_In_session_id?: SortOrder
    Project_In_session_id?: SortOrder
    on_time_alert_onupdate?: SortOrder
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

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    emp_num?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    role?: SortOrder
    password?: SortOrder
    email_address?: SortOrder
    created_at?: SortOrder
    last_logged_in?: SortOrder
    deactivated?: SortOrder
    onetime_survey?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    emp_num?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    role?: SortOrder
    password?: SortOrder
    email_address?: SortOrder
    created_at?: SortOrder
    last_logged_in?: SortOrder
    deactivated?: SortOrder
    onetime_survey?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    emp_num?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    role?: SortOrder
    password?: SortOrder
    email_address?: SortOrder
    created_at?: SortOrder
    last_logged_in?: SortOrder
    deactivated?: SortOrder
    onetime_survey?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
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

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
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

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
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