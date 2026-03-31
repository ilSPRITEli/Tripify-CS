
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Trip
 * 
 */
export type Trip = $Result.DefaultSelection<Prisma.$TripPayload>
/**
 * Model TripMember
 * 
 */
export type TripMember = $Result.DefaultSelection<Prisma.$TripMemberPayload>
/**
 * Model TripDay
 * 
 */
export type TripDay = $Result.DefaultSelection<Prisma.$TripDayPayload>
/**
 * Model ItineraryItem
 * 
 */
export type ItineraryItem = $Result.DefaultSelection<Prisma.$ItineraryItemPayload>
/**
 * Model TripInvitation
 * 
 */
export type TripInvitation = $Result.DefaultSelection<Prisma.$TripInvitationPayload>
/**
 * Model Rating
 * 
 */
export type Rating = $Result.DefaultSelection<Prisma.$RatingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AuthProvider: {
  GOOGLE: 'GOOGLE'
};

export type AuthProvider = (typeof AuthProvider)[keyof typeof AuthProvider]


export const TripStatus: {
  DRAFT: 'DRAFT',
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
  ENDED_EARLY: 'ENDED_EARLY',
  ARCHIVED: 'ARCHIVED',
  CANCELLED: 'CANCELLED'
};

export type TripStatus = (typeof TripStatus)[keyof typeof TripStatus]


export const TripMemberRole: {
  OWNER: 'OWNER',
  MEMBER: 'MEMBER'
};

export type TripMemberRole = (typeof TripMemberRole)[keyof typeof TripMemberRole]


export const InvitationStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  DECLINED: 'DECLINED',
  EXPIRED: 'EXPIRED',
  REVOKED: 'REVOKED',
  CANCELLED: 'CANCELLED'
};

export type InvitationStatus = (typeof InvitationStatus)[keyof typeof InvitationStatus]

}

export type AuthProvider = $Enums.AuthProvider

export const AuthProvider: typeof $Enums.AuthProvider

export type TripStatus = $Enums.TripStatus

export const TripStatus: typeof $Enums.TripStatus

export type TripMemberRole = $Enums.TripMemberRole

export const TripMemberRole: typeof $Enums.TripMemberRole

export type InvitationStatus = $Enums.InvitationStatus

export const InvitationStatus: typeof $Enums.InvitationStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trip`: Exposes CRUD operations for the **Trip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trips
    * const trips = await prisma.trip.findMany()
    * ```
    */
  get trip(): Prisma.TripDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tripMember`: Exposes CRUD operations for the **TripMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TripMembers
    * const tripMembers = await prisma.tripMember.findMany()
    * ```
    */
  get tripMember(): Prisma.TripMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tripDay`: Exposes CRUD operations for the **TripDay** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TripDays
    * const tripDays = await prisma.tripDay.findMany()
    * ```
    */
  get tripDay(): Prisma.TripDayDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itineraryItem`: Exposes CRUD operations for the **ItineraryItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItineraryItems
    * const itineraryItems = await prisma.itineraryItem.findMany()
    * ```
    */
  get itineraryItem(): Prisma.ItineraryItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tripInvitation`: Exposes CRUD operations for the **TripInvitation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TripInvitations
    * const tripInvitations = await prisma.tripInvitation.findMany()
    * ```
    */
  get tripInvitation(): Prisma.TripInvitationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rating`: Exposes CRUD operations for the **Rating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ratings
    * const ratings = await prisma.rating.findMany()
    * ```
    */
  get rating(): Prisma.RatingDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
  : T extends Uint8Array
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Trip: 'Trip',
    TripMember: 'TripMember',
    TripDay: 'TripDay',
    ItineraryItem: 'ItineraryItem',
    TripInvitation: 'TripInvitation',
    Rating: 'Rating'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "trip" | "tripMember" | "tripDay" | "itineraryItem" | "tripInvitation" | "rating"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Trip: {
        payload: Prisma.$TripPayload<ExtArgs>
        fields: Prisma.TripFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findFirst: {
            args: Prisma.TripFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findMany: {
            args: Prisma.TripFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          create: {
            args: Prisma.TripCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          createMany: {
            args: Prisma.TripCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TripCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          delete: {
            args: Prisma.TripDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          update: {
            args: Prisma.TripUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          deleteMany: {
            args: Prisma.TripDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TripUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          upsert: {
            args: Prisma.TripUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          aggregate: {
            args: Prisma.TripAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrip>
          }
          groupBy: {
            args: Prisma.TripGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripCountArgs<ExtArgs>
            result: $Utils.Optional<TripCountAggregateOutputType> | number
          }
        }
      }
      TripMember: {
        payload: Prisma.$TripMemberPayload<ExtArgs>
        fields: Prisma.TripMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripMemberPayload>
          }
          findFirst: {
            args: Prisma.TripMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripMemberPayload>
          }
          findMany: {
            args: Prisma.TripMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripMemberPayload>[]
          }
          create: {
            args: Prisma.TripMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripMemberPayload>
          }
          createMany: {
            args: Prisma.TripMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TripMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripMemberPayload>[]
          }
          delete: {
            args: Prisma.TripMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripMemberPayload>
          }
          update: {
            args: Prisma.TripMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripMemberPayload>
          }
          deleteMany: {
            args: Prisma.TripMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TripMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripMemberPayload>[]
          }
          upsert: {
            args: Prisma.TripMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripMemberPayload>
          }
          aggregate: {
            args: Prisma.TripMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTripMember>
          }
          groupBy: {
            args: Prisma.TripMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripMemberCountArgs<ExtArgs>
            result: $Utils.Optional<TripMemberCountAggregateOutputType> | number
          }
        }
      }
      TripDay: {
        payload: Prisma.$TripDayPayload<ExtArgs>
        fields: Prisma.TripDayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripDayFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripDayFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDayPayload>
          }
          findFirst: {
            args: Prisma.TripDayFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripDayFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDayPayload>
          }
          findMany: {
            args: Prisma.TripDayFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDayPayload>[]
          }
          create: {
            args: Prisma.TripDayCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDayPayload>
          }
          createMany: {
            args: Prisma.TripDayCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TripDayCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDayPayload>[]
          }
          delete: {
            args: Prisma.TripDayDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDayPayload>
          }
          update: {
            args: Prisma.TripDayUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDayPayload>
          }
          deleteMany: {
            args: Prisma.TripDayDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripDayUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TripDayUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDayPayload>[]
          }
          upsert: {
            args: Prisma.TripDayUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDayPayload>
          }
          aggregate: {
            args: Prisma.TripDayAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTripDay>
          }
          groupBy: {
            args: Prisma.TripDayGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripDayGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripDayCountArgs<ExtArgs>
            result: $Utils.Optional<TripDayCountAggregateOutputType> | number
          }
        }
      }
      ItineraryItem: {
        payload: Prisma.$ItineraryItemPayload<ExtArgs>
        fields: Prisma.ItineraryItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItineraryItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItineraryItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItineraryItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItineraryItemPayload>
          }
          findFirst: {
            args: Prisma.ItineraryItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItineraryItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItineraryItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItineraryItemPayload>
          }
          findMany: {
            args: Prisma.ItineraryItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItineraryItemPayload>[]
          }
          create: {
            args: Prisma.ItineraryItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItineraryItemPayload>
          }
          createMany: {
            args: Prisma.ItineraryItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItineraryItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItineraryItemPayload>[]
          }
          delete: {
            args: Prisma.ItineraryItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItineraryItemPayload>
          }
          update: {
            args: Prisma.ItineraryItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItineraryItemPayload>
          }
          deleteMany: {
            args: Prisma.ItineraryItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItineraryItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItineraryItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItineraryItemPayload>[]
          }
          upsert: {
            args: Prisma.ItineraryItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItineraryItemPayload>
          }
          aggregate: {
            args: Prisma.ItineraryItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItineraryItem>
          }
          groupBy: {
            args: Prisma.ItineraryItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItineraryItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItineraryItemCountArgs<ExtArgs>
            result: $Utils.Optional<ItineraryItemCountAggregateOutputType> | number
          }
        }
      }
      TripInvitation: {
        payload: Prisma.$TripInvitationPayload<ExtArgs>
        fields: Prisma.TripInvitationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripInvitationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripInvitationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripInvitationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripInvitationPayload>
          }
          findFirst: {
            args: Prisma.TripInvitationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripInvitationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripInvitationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripInvitationPayload>
          }
          findMany: {
            args: Prisma.TripInvitationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripInvitationPayload>[]
          }
          create: {
            args: Prisma.TripInvitationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripInvitationPayload>
          }
          createMany: {
            args: Prisma.TripInvitationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TripInvitationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripInvitationPayload>[]
          }
          delete: {
            args: Prisma.TripInvitationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripInvitationPayload>
          }
          update: {
            args: Prisma.TripInvitationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripInvitationPayload>
          }
          deleteMany: {
            args: Prisma.TripInvitationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripInvitationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TripInvitationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripInvitationPayload>[]
          }
          upsert: {
            args: Prisma.TripInvitationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripInvitationPayload>
          }
          aggregate: {
            args: Prisma.TripInvitationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTripInvitation>
          }
          groupBy: {
            args: Prisma.TripInvitationGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripInvitationGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripInvitationCountArgs<ExtArgs>
            result: $Utils.Optional<TripInvitationCountAggregateOutputType> | number
          }
        }
      }
      Rating: {
        payload: Prisma.$RatingPayload<ExtArgs>
        fields: Prisma.RatingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RatingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RatingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          findFirst: {
            args: Prisma.RatingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RatingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          findMany: {
            args: Prisma.RatingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          create: {
            args: Prisma.RatingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          createMany: {
            args: Prisma.RatingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RatingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          delete: {
            args: Prisma.RatingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          update: {
            args: Prisma.RatingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          deleteMany: {
            args: Prisma.RatingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RatingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RatingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          upsert: {
            args: Prisma.RatingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          aggregate: {
            args: Prisma.RatingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRating>
          }
          groupBy: {
            args: Prisma.RatingGroupByArgs<ExtArgs>
            result: $Utils.Optional<RatingGroupByOutputType>[]
          }
          count: {
            args: Prisma.RatingCountArgs<ExtArgs>
            result: $Utils.Optional<RatingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    trip?: TripOmit
    tripMember?: TripMemberOmit
    tripDay?: TripDayOmit
    itineraryItem?: ItineraryItemOmit
    tripInvitation?: TripInvitationOmit
    rating?: RatingOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    ownedTrips: number
    tripMembers: number
    invitationsSent: number
    invitationsRecv: number
    ratings: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownedTrips?: boolean | UserCountOutputTypeCountOwnedTripsArgs
    tripMembers?: boolean | UserCountOutputTypeCountTripMembersArgs
    invitationsSent?: boolean | UserCountOutputTypeCountInvitationsSentArgs
    invitationsRecv?: boolean | UserCountOutputTypeCountInvitationsRecvArgs
    ratings?: boolean | UserCountOutputTypeCountRatingsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnedTripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTripMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInvitationsSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripInvitationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInvitationsRecvArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripInvitationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
  }


  /**
   * Count Type TripCountOutputType
   */

  export type TripCountOutputType = {
    members: number
    days: number
    invitations: number
    ratings: number
  }

  export type TripCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | TripCountOutputTypeCountMembersArgs
    days?: boolean | TripCountOutputTypeCountDaysArgs
    invitations?: boolean | TripCountOutputTypeCountInvitationsArgs
    ratings?: boolean | TripCountOutputTypeCountRatingsArgs
  }

  // Custom InputTypes
  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCountOutputType
     */
    select?: TripCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripMemberWhereInput
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountDaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripDayWhereInput
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripInvitationWhereInput
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
  }


  /**
   * Count Type TripDayCountOutputType
   */

  export type TripDayCountOutputType = {
    items: number
  }

  export type TripDayCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | TripDayCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * TripDayCountOutputType without action
   */
  export type TripDayCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDayCountOutputType
     */
    select?: TripDayCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TripDayCountOutputType without action
   */
  export type TripDayCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItineraryItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    supabaseAuthId: string | null
    provider: $Enums.AuthProvider | null
    providerSubject: string | null
    email: string | null
    fullName: string | null
    avatarUrl: string | null
    username: string | null
    bio: string | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    supabaseAuthId: string | null
    provider: $Enums.AuthProvider | null
    providerSubject: string | null
    email: string | null
    fullName: string | null
    avatarUrl: string | null
    username: string | null
    bio: string | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    supabaseAuthId: number
    provider: number
    providerSubject: number
    email: number
    fullName: number
    avatarUrl: number
    username: number
    bio: number
    country: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    supabaseAuthId?: true
    provider?: true
    providerSubject?: true
    email?: true
    fullName?: true
    avatarUrl?: true
    username?: true
    bio?: true
    country?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    supabaseAuthId?: true
    provider?: true
    providerSubject?: true
    email?: true
    fullName?: true
    avatarUrl?: true
    username?: true
    bio?: true
    country?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    supabaseAuthId?: true
    provider?: true
    providerSubject?: true
    email?: true
    fullName?: true
    avatarUrl?: true
    username?: true
    bio?: true
    country?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    supabaseAuthId: string
    provider: $Enums.AuthProvider
    providerSubject: string | null
    email: string
    fullName: string
    avatarUrl: string | null
    username: string | null
    bio: string | null
    country: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supabaseAuthId?: boolean
    provider?: boolean
    providerSubject?: boolean
    email?: boolean
    fullName?: boolean
    avatarUrl?: boolean
    username?: boolean
    bio?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownedTrips?: boolean | User$ownedTripsArgs<ExtArgs>
    tripMembers?: boolean | User$tripMembersArgs<ExtArgs>
    invitationsSent?: boolean | User$invitationsSentArgs<ExtArgs>
    invitationsRecv?: boolean | User$invitationsRecvArgs<ExtArgs>
    ratings?: boolean | User$ratingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supabaseAuthId?: boolean
    provider?: boolean
    providerSubject?: boolean
    email?: boolean
    fullName?: boolean
    avatarUrl?: boolean
    username?: boolean
    bio?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supabaseAuthId?: boolean
    provider?: boolean
    providerSubject?: boolean
    email?: boolean
    fullName?: boolean
    avatarUrl?: boolean
    username?: boolean
    bio?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    supabaseAuthId?: boolean
    provider?: boolean
    providerSubject?: boolean
    email?: boolean
    fullName?: boolean
    avatarUrl?: boolean
    username?: boolean
    bio?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "supabaseAuthId" | "provider" | "providerSubject" | "email" | "fullName" | "avatarUrl" | "username" | "bio" | "country" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownedTrips?: boolean | User$ownedTripsArgs<ExtArgs>
    tripMembers?: boolean | User$tripMembersArgs<ExtArgs>
    invitationsSent?: boolean | User$invitationsSentArgs<ExtArgs>
    invitationsRecv?: boolean | User$invitationsRecvArgs<ExtArgs>
    ratings?: boolean | User$ratingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      ownedTrips: Prisma.$TripPayload<ExtArgs>[]
      tripMembers: Prisma.$TripMemberPayload<ExtArgs>[]
      invitationsSent: Prisma.$TripInvitationPayload<ExtArgs>[]
      invitationsRecv: Prisma.$TripInvitationPayload<ExtArgs>[]
      ratings: Prisma.$RatingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      supabaseAuthId: string
      provider: $Enums.AuthProvider
      providerSubject: string | null
      email: string
      fullName: string
      avatarUrl: string | null
      username: string | null
      bio: string | null
      country: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ownedTrips<T extends User$ownedTripsArgs<ExtArgs> = {}>(args?: Subset<T, User$ownedTripsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tripMembers<T extends User$tripMembersArgs<ExtArgs> = {}>(args?: Subset<T, User$tripMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invitationsSent<T extends User$invitationsSentArgs<ExtArgs> = {}>(args?: Subset<T, User$invitationsSentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripInvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invitationsRecv<T extends User$invitationsRecvArgs<ExtArgs> = {}>(args?: Subset<T, User$invitationsRecvArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripInvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ratings<T extends User$ratingsArgs<ExtArgs> = {}>(args?: Subset<T, User$ratingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly supabaseAuthId: FieldRef<"User", 'String'>
    readonly provider: FieldRef<"User", 'AuthProvider'>
    readonly providerSubject: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly country: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.ownedTrips
   */
  export type User$ownedTripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    where?: TripWhereInput
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    cursor?: TripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * User.tripMembers
   */
  export type User$tripMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripMember
     */
    select?: TripMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripMember
     */
    omit?: TripMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripMemberInclude<ExtArgs> | null
    where?: TripMemberWhereInput
    orderBy?: TripMemberOrderByWithRelationInput | TripMemberOrderByWithRelationInput[]
    cursor?: TripMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripMemberScalarFieldEnum | TripMemberScalarFieldEnum[]
  }

  /**
   * User.invitationsSent
   */
  export type User$invitationsSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripInvitation
     */
    select?: TripInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripInvitation
     */
    omit?: TripInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInvitationInclude<ExtArgs> | null
    where?: TripInvitationWhereInput
    orderBy?: TripInvitationOrderByWithRelationInput | TripInvitationOrderByWithRelationInput[]
    cursor?: TripInvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripInvitationScalarFieldEnum | TripInvitationScalarFieldEnum[]
  }

  /**
   * User.invitationsRecv
   */
  export type User$invitationsRecvArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripInvitation
     */
    select?: TripInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripInvitation
     */
    omit?: TripInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInvitationInclude<ExtArgs> | null
    where?: TripInvitationWhereInput
    orderBy?: TripInvitationOrderByWithRelationInput | TripInvitationOrderByWithRelationInput[]
    cursor?: TripInvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripInvitationScalarFieldEnum | TripInvitationScalarFieldEnum[]
  }

  /**
   * User.ratings
   */
  export type User$ratingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    cursor?: RatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Trip
   */

  export type AggregateTrip = {
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  export type TripAvgAggregateOutputType = {
    budgetTotal: Decimal | null
    travelerCount: number | null
    templateUseCount: number | null
  }

  export type TripSumAggregateOutputType = {
    budgetTotal: Decimal | null
    travelerCount: number | null
    templateUseCount: number | null
  }

  export type TripMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    title: string | null
    description: string | null
    destination: string | null
    destinationCountry: string | null
    destinationCity: string | null
    budgetTotal: Decimal | null
    travelerCount: number | null
    startDate: Date | null
    endDate: Date | null
    timezone: string | null
    coverImageUrl: string | null
    status: $Enums.TripStatus | null
    endedAt: Date | null
    endedByUserId: string | null
    isTemplatePublished: boolean | null
    templatePublishedAt: Date | null
    templateUseCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TripMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    title: string | null
    description: string | null
    destination: string | null
    destinationCountry: string | null
    destinationCity: string | null
    budgetTotal: Decimal | null
    travelerCount: number | null
    startDate: Date | null
    endDate: Date | null
    timezone: string | null
    coverImageUrl: string | null
    status: $Enums.TripStatus | null
    endedAt: Date | null
    endedByUserId: string | null
    isTemplatePublished: boolean | null
    templatePublishedAt: Date | null
    templateUseCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TripCountAggregateOutputType = {
    id: number
    ownerId: number
    title: number
    description: number
    destination: number
    destinationCountry: number
    destinationCity: number
    budgetTotal: number
    travelerCount: number
    startDate: number
    endDate: number
    timezone: number
    coverImageUrl: number
    status: number
    endedAt: number
    endedByUserId: number
    isTemplatePublished: number
    templatePublishedAt: number
    templateUseCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TripAvgAggregateInputType = {
    budgetTotal?: true
    travelerCount?: true
    templateUseCount?: true
  }

  export type TripSumAggregateInputType = {
    budgetTotal?: true
    travelerCount?: true
    templateUseCount?: true
  }

  export type TripMinAggregateInputType = {
    id?: true
    ownerId?: true
    title?: true
    description?: true
    destination?: true
    destinationCountry?: true
    destinationCity?: true
    budgetTotal?: true
    travelerCount?: true
    startDate?: true
    endDate?: true
    timezone?: true
    coverImageUrl?: true
    status?: true
    endedAt?: true
    endedByUserId?: true
    isTemplatePublished?: true
    templatePublishedAt?: true
    templateUseCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TripMaxAggregateInputType = {
    id?: true
    ownerId?: true
    title?: true
    description?: true
    destination?: true
    destinationCountry?: true
    destinationCity?: true
    budgetTotal?: true
    travelerCount?: true
    startDate?: true
    endDate?: true
    timezone?: true
    coverImageUrl?: true
    status?: true
    endedAt?: true
    endedByUserId?: true
    isTemplatePublished?: true
    templatePublishedAt?: true
    templateUseCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TripCountAggregateInputType = {
    id?: true
    ownerId?: true
    title?: true
    description?: true
    destination?: true
    destinationCountry?: true
    destinationCity?: true
    budgetTotal?: true
    travelerCount?: true
    startDate?: true
    endDate?: true
    timezone?: true
    coverImageUrl?: true
    status?: true
    endedAt?: true
    endedByUserId?: true
    isTemplatePublished?: true
    templatePublishedAt?: true
    templateUseCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TripAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trip to aggregate.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trips
    **/
    _count?: true | TripCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TripAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TripSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripMaxAggregateInputType
  }

  export type GetTripAggregateType<T extends TripAggregateArgs> = {
        [P in keyof T & keyof AggregateTrip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrip[P]>
      : GetScalarType<T[P], AggregateTrip[P]>
  }




  export type TripGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
    orderBy?: TripOrderByWithAggregationInput | TripOrderByWithAggregationInput[]
    by: TripScalarFieldEnum[] | TripScalarFieldEnum
    having?: TripScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripCountAggregateInputType | true
    _avg?: TripAvgAggregateInputType
    _sum?: TripSumAggregateInputType
    _min?: TripMinAggregateInputType
    _max?: TripMaxAggregateInputType
  }

  export type TripGroupByOutputType = {
    id: string
    ownerId: string
    title: string
    description: string | null
    destination: string
    destinationCountry: string | null
    destinationCity: string | null
    budgetTotal: Decimal | null
    travelerCount: number
    startDate: Date
    endDate: Date
    timezone: string
    coverImageUrl: string | null
    status: $Enums.TripStatus
    endedAt: Date | null
    endedByUserId: string | null
    isTemplatePublished: boolean
    templatePublishedAt: Date | null
    templateUseCount: number
    createdAt: Date
    updatedAt: Date
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  type GetTripGroupByPayload<T extends TripGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripGroupByOutputType[P]>
            : GetScalarType<T[P], TripGroupByOutputType[P]>
        }
      >
    >


  export type TripSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    title?: boolean
    description?: boolean
    destination?: boolean
    destinationCountry?: boolean
    destinationCity?: boolean
    budgetTotal?: boolean
    travelerCount?: boolean
    startDate?: boolean
    endDate?: boolean
    timezone?: boolean
    coverImageUrl?: boolean
    status?: boolean
    endedAt?: boolean
    endedByUserId?: boolean
    isTemplatePublished?: boolean
    templatePublishedAt?: boolean
    templateUseCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Trip$membersArgs<ExtArgs>
    days?: boolean | Trip$daysArgs<ExtArgs>
    invitations?: boolean | Trip$invitationsArgs<ExtArgs>
    ratings?: boolean | Trip$ratingsArgs<ExtArgs>
    _count?: boolean | TripCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>

  export type TripSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    title?: boolean
    description?: boolean
    destination?: boolean
    destinationCountry?: boolean
    destinationCity?: boolean
    budgetTotal?: boolean
    travelerCount?: boolean
    startDate?: boolean
    endDate?: boolean
    timezone?: boolean
    coverImageUrl?: boolean
    status?: boolean
    endedAt?: boolean
    endedByUserId?: boolean
    isTemplatePublished?: boolean
    templatePublishedAt?: boolean
    templateUseCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>

  export type TripSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    title?: boolean
    description?: boolean
    destination?: boolean
    destinationCountry?: boolean
    destinationCity?: boolean
    budgetTotal?: boolean
    travelerCount?: boolean
    startDate?: boolean
    endDate?: boolean
    timezone?: boolean
    coverImageUrl?: boolean
    status?: boolean
    endedAt?: boolean
    endedByUserId?: boolean
    isTemplatePublished?: boolean
    templatePublishedAt?: boolean
    templateUseCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>

  export type TripSelectScalar = {
    id?: boolean
    ownerId?: boolean
    title?: boolean
    description?: boolean
    destination?: boolean
    destinationCountry?: boolean
    destinationCity?: boolean
    budgetTotal?: boolean
    travelerCount?: boolean
    startDate?: boolean
    endDate?: boolean
    timezone?: boolean
    coverImageUrl?: boolean
    status?: boolean
    endedAt?: boolean
    endedByUserId?: boolean
    isTemplatePublished?: boolean
    templatePublishedAt?: boolean
    templateUseCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TripOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "title" | "description" | "destination" | "destinationCountry" | "destinationCity" | "budgetTotal" | "travelerCount" | "startDate" | "endDate" | "timezone" | "coverImageUrl" | "status" | "endedAt" | "endedByUserId" | "isTemplatePublished" | "templatePublishedAt" | "templateUseCount" | "createdAt" | "updatedAt", ExtArgs["result"]["trip"]>
  export type TripInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Trip$membersArgs<ExtArgs>
    days?: boolean | Trip$daysArgs<ExtArgs>
    invitations?: boolean | Trip$invitationsArgs<ExtArgs>
    ratings?: boolean | Trip$ratingsArgs<ExtArgs>
    _count?: boolean | TripCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TripIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TripIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TripPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trip"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      members: Prisma.$TripMemberPayload<ExtArgs>[]
      days: Prisma.$TripDayPayload<ExtArgs>[]
      invitations: Prisma.$TripInvitationPayload<ExtArgs>[]
      ratings: Prisma.$RatingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string
      title: string
      description: string | null
      destination: string
      destinationCountry: string | null
      destinationCity: string | null
      budgetTotal: Prisma.Decimal | null
      travelerCount: number
      startDate: Date
      endDate: Date
      timezone: string
      coverImageUrl: string | null
      status: $Enums.TripStatus
      endedAt: Date | null
      endedByUserId: string | null
      isTemplatePublished: boolean
      templatePublishedAt: Date | null
      templateUseCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["trip"]>
    composites: {}
  }

  type TripGetPayload<S extends boolean | null | undefined | TripDefaultArgs> = $Result.GetResult<Prisma.$TripPayload, S>

  type TripCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TripFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripCountAggregateInputType | true
    }

  export interface TripDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trip'], meta: { name: 'Trip' } }
    /**
     * Find zero or one Trip that matches the filter.
     * @param {TripFindUniqueArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripFindUniqueArgs>(args: SelectSubset<T, TripFindUniqueArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trip that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TripFindUniqueOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripFindUniqueOrThrowArgs>(args: SelectSubset<T, TripFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripFindFirstArgs>(args?: SelectSubset<T, TripFindFirstArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripFindFirstOrThrowArgs>(args?: SelectSubset<T, TripFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trips
     * const trips = await prisma.trip.findMany()
     * 
     * // Get first 10 Trips
     * const trips = await prisma.trip.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripWithIdOnly = await prisma.trip.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TripFindManyArgs>(args?: SelectSubset<T, TripFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trip.
     * @param {TripCreateArgs} args - Arguments to create a Trip.
     * @example
     * // Create one Trip
     * const Trip = await prisma.trip.create({
     *   data: {
     *     // ... data to create a Trip
     *   }
     * })
     * 
     */
    create<T extends TripCreateArgs>(args: SelectSubset<T, TripCreateArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trips.
     * @param {TripCreateManyArgs} args - Arguments to create many Trips.
     * @example
     * // Create many Trips
     * const trip = await prisma.trip.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripCreateManyArgs>(args?: SelectSubset<T, TripCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trips and returns the data saved in the database.
     * @param {TripCreateManyAndReturnArgs} args - Arguments to create many Trips.
     * @example
     * // Create many Trips
     * const trip = await prisma.trip.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trips and only return the `id`
     * const tripWithIdOnly = await prisma.trip.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TripCreateManyAndReturnArgs>(args?: SelectSubset<T, TripCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trip.
     * @param {TripDeleteArgs} args - Arguments to delete one Trip.
     * @example
     * // Delete one Trip
     * const Trip = await prisma.trip.delete({
     *   where: {
     *     // ... filter to delete one Trip
     *   }
     * })
     * 
     */
    delete<T extends TripDeleteArgs>(args: SelectSubset<T, TripDeleteArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trip.
     * @param {TripUpdateArgs} args - Arguments to update one Trip.
     * @example
     * // Update one Trip
     * const trip = await prisma.trip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripUpdateArgs>(args: SelectSubset<T, TripUpdateArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trips.
     * @param {TripDeleteManyArgs} args - Arguments to filter Trips to delete.
     * @example
     * // Delete a few Trips
     * const { count } = await prisma.trip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripDeleteManyArgs>(args?: SelectSubset<T, TripDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trips
     * const trip = await prisma.trip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripUpdateManyArgs>(args: SelectSubset<T, TripUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trips and returns the data updated in the database.
     * @param {TripUpdateManyAndReturnArgs} args - Arguments to update many Trips.
     * @example
     * // Update many Trips
     * const trip = await prisma.trip.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Trips and only return the `id`
     * const tripWithIdOnly = await prisma.trip.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TripUpdateManyAndReturnArgs>(args: SelectSubset<T, TripUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trip.
     * @param {TripUpsertArgs} args - Arguments to update or create a Trip.
     * @example
     * // Update or create a Trip
     * const trip = await prisma.trip.upsert({
     *   create: {
     *     // ... data to create a Trip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trip we want to update
     *   }
     * })
     */
    upsert<T extends TripUpsertArgs>(args: SelectSubset<T, TripUpsertArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripCountArgs} args - Arguments to filter Trips to count.
     * @example
     * // Count the number of Trips
     * const count = await prisma.trip.count({
     *   where: {
     *     // ... the filter for the Trips we want to count
     *   }
     * })
    **/
    count<T extends TripCountArgs>(
      args?: Subset<T, TripCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TripAggregateArgs>(args: Subset<T, TripAggregateArgs>): Prisma.PrismaPromise<GetTripAggregateType<T>>

    /**
     * Group by Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripGroupByArgs} args - Group by arguments.
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
      T extends TripGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripGroupByArgs['orderBy'] }
        : { orderBy?: TripGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TripGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trip model
   */
  readonly fields: TripFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends Trip$membersArgs<ExtArgs> = {}>(args?: Subset<T, Trip$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    days<T extends Trip$daysArgs<ExtArgs> = {}>(args?: Subset<T, Trip$daysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripDayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invitations<T extends Trip$invitationsArgs<ExtArgs> = {}>(args?: Subset<T, Trip$invitationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripInvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ratings<T extends Trip$ratingsArgs<ExtArgs> = {}>(args?: Subset<T, Trip$ratingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Trip model
   */
  interface TripFieldRefs {
    readonly id: FieldRef<"Trip", 'String'>
    readonly ownerId: FieldRef<"Trip", 'String'>
    readonly title: FieldRef<"Trip", 'String'>
    readonly description: FieldRef<"Trip", 'String'>
    readonly destination: FieldRef<"Trip", 'String'>
    readonly destinationCountry: FieldRef<"Trip", 'String'>
    readonly destinationCity: FieldRef<"Trip", 'String'>
    readonly budgetTotal: FieldRef<"Trip", 'Decimal'>
    readonly travelerCount: FieldRef<"Trip", 'Int'>
    readonly startDate: FieldRef<"Trip", 'DateTime'>
    readonly endDate: FieldRef<"Trip", 'DateTime'>
    readonly timezone: FieldRef<"Trip", 'String'>
    readonly coverImageUrl: FieldRef<"Trip", 'String'>
    readonly status: FieldRef<"Trip", 'TripStatus'>
    readonly endedAt: FieldRef<"Trip", 'DateTime'>
    readonly endedByUserId: FieldRef<"Trip", 'String'>
    readonly isTemplatePublished: FieldRef<"Trip", 'Boolean'>
    readonly templatePublishedAt: FieldRef<"Trip", 'DateTime'>
    readonly templateUseCount: FieldRef<"Trip", 'Int'>
    readonly createdAt: FieldRef<"Trip", 'DateTime'>
    readonly updatedAt: FieldRef<"Trip", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Trip findUnique
   */
  export type TripFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip findUniqueOrThrow
   */
  export type TripFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip findFirst
   */
  export type TripFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip findFirstOrThrow
   */
  export type TripFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip findMany
   */
  export type TripFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trips to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip create
   */
  export type TripCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The data needed to create a Trip.
     */
    data: XOR<TripCreateInput, TripUncheckedCreateInput>
  }

  /**
   * Trip createMany
   */
  export type TripCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trips.
     */
    data: TripCreateManyInput | TripCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trip createManyAndReturn
   */
  export type TripCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * The data used to create many Trips.
     */
    data: TripCreateManyInput | TripCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trip update
   */
  export type TripUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The data needed to update a Trip.
     */
    data: XOR<TripUpdateInput, TripUncheckedUpdateInput>
    /**
     * Choose, which Trip to update.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip updateMany
   */
  export type TripUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trips.
     */
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyInput>
    /**
     * Filter which Trips to update
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to update.
     */
    limit?: number
  }

  /**
   * Trip updateManyAndReturn
   */
  export type TripUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * The data used to update Trips.
     */
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyInput>
    /**
     * Filter which Trips to update
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trip upsert
   */
  export type TripUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The filter to search for the Trip to update in case it exists.
     */
    where: TripWhereUniqueInput
    /**
     * In case the Trip found by the `where` argument doesn't exist, create a new Trip with this data.
     */
    create: XOR<TripCreateInput, TripUncheckedCreateInput>
    /**
     * In case the Trip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripUpdateInput, TripUncheckedUpdateInput>
  }

  /**
   * Trip delete
   */
  export type TripDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter which Trip to delete.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip deleteMany
   */
  export type TripDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trips to delete
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to delete.
     */
    limit?: number
  }

  /**
   * Trip.members
   */
  export type Trip$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripMember
     */
    select?: TripMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripMember
     */
    omit?: TripMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripMemberInclude<ExtArgs> | null
    where?: TripMemberWhereInput
    orderBy?: TripMemberOrderByWithRelationInput | TripMemberOrderByWithRelationInput[]
    cursor?: TripMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripMemberScalarFieldEnum | TripMemberScalarFieldEnum[]
  }

  /**
   * Trip.days
   */
  export type Trip$daysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDay
     */
    select?: TripDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripDay
     */
    omit?: TripDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDayInclude<ExtArgs> | null
    where?: TripDayWhereInput
    orderBy?: TripDayOrderByWithRelationInput | TripDayOrderByWithRelationInput[]
    cursor?: TripDayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripDayScalarFieldEnum | TripDayScalarFieldEnum[]
  }

  /**
   * Trip.invitations
   */
  export type Trip$invitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripInvitation
     */
    select?: TripInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripInvitation
     */
    omit?: TripInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInvitationInclude<ExtArgs> | null
    where?: TripInvitationWhereInput
    orderBy?: TripInvitationOrderByWithRelationInput | TripInvitationOrderByWithRelationInput[]
    cursor?: TripInvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripInvitationScalarFieldEnum | TripInvitationScalarFieldEnum[]
  }

  /**
   * Trip.ratings
   */
  export type Trip$ratingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    cursor?: RatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Trip without action
   */
  export type TripDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
  }


  /**
   * Model TripMember
   */

  export type AggregateTripMember = {
    _count: TripMemberCountAggregateOutputType | null
    _min: TripMemberMinAggregateOutputType | null
    _max: TripMemberMaxAggregateOutputType | null
  }

  export type TripMemberMinAggregateOutputType = {
    id: string | null
    tripId: string | null
    userId: string | null
    role: $Enums.TripMemberRole | null
    joinedAt: Date | null
    addedByUserId: string | null
  }

  export type TripMemberMaxAggregateOutputType = {
    id: string | null
    tripId: string | null
    userId: string | null
    role: $Enums.TripMemberRole | null
    joinedAt: Date | null
    addedByUserId: string | null
  }

  export type TripMemberCountAggregateOutputType = {
    id: number
    tripId: number
    userId: number
    role: number
    joinedAt: number
    addedByUserId: number
    _all: number
  }


  export type TripMemberMinAggregateInputType = {
    id?: true
    tripId?: true
    userId?: true
    role?: true
    joinedAt?: true
    addedByUserId?: true
  }

  export type TripMemberMaxAggregateInputType = {
    id?: true
    tripId?: true
    userId?: true
    role?: true
    joinedAt?: true
    addedByUserId?: true
  }

  export type TripMemberCountAggregateInputType = {
    id?: true
    tripId?: true
    userId?: true
    role?: true
    joinedAt?: true
    addedByUserId?: true
    _all?: true
  }

  export type TripMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripMember to aggregate.
     */
    where?: TripMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripMembers to fetch.
     */
    orderBy?: TripMemberOrderByWithRelationInput | TripMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TripMembers
    **/
    _count?: true | TripMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripMemberMaxAggregateInputType
  }

  export type GetTripMemberAggregateType<T extends TripMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateTripMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTripMember[P]>
      : GetScalarType<T[P], AggregateTripMember[P]>
  }




  export type TripMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripMemberWhereInput
    orderBy?: TripMemberOrderByWithAggregationInput | TripMemberOrderByWithAggregationInput[]
    by: TripMemberScalarFieldEnum[] | TripMemberScalarFieldEnum
    having?: TripMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripMemberCountAggregateInputType | true
    _min?: TripMemberMinAggregateInputType
    _max?: TripMemberMaxAggregateInputType
  }

  export type TripMemberGroupByOutputType = {
    id: string
    tripId: string
    userId: string
    role: $Enums.TripMemberRole
    joinedAt: Date
    addedByUserId: string | null
    _count: TripMemberCountAggregateOutputType | null
    _min: TripMemberMinAggregateOutputType | null
    _max: TripMemberMaxAggregateOutputType | null
  }

  type GetTripMemberGroupByPayload<T extends TripMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripMemberGroupByOutputType[P]>
            : GetScalarType<T[P], TripMemberGroupByOutputType[P]>
        }
      >
    >


  export type TripMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    userId?: boolean
    role?: boolean
    joinedAt?: boolean
    addedByUserId?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripMember"]>

  export type TripMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    userId?: boolean
    role?: boolean
    joinedAt?: boolean
    addedByUserId?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripMember"]>

  export type TripMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    userId?: boolean
    role?: boolean
    joinedAt?: boolean
    addedByUserId?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripMember"]>

  export type TripMemberSelectScalar = {
    id?: boolean
    tripId?: boolean
    userId?: boolean
    role?: boolean
    joinedAt?: boolean
    addedByUserId?: boolean
  }

  export type TripMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tripId" | "userId" | "role" | "joinedAt" | "addedByUserId", ExtArgs["result"]["tripMember"]>
  export type TripMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TripMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TripMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TripMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TripMember"
    objects: {
      trip: Prisma.$TripPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tripId: string
      userId: string
      role: $Enums.TripMemberRole
      joinedAt: Date
      addedByUserId: string | null
    }, ExtArgs["result"]["tripMember"]>
    composites: {}
  }

  type TripMemberGetPayload<S extends boolean | null | undefined | TripMemberDefaultArgs> = $Result.GetResult<Prisma.$TripMemberPayload, S>

  type TripMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TripMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripMemberCountAggregateInputType | true
    }

  export interface TripMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TripMember'], meta: { name: 'TripMember' } }
    /**
     * Find zero or one TripMember that matches the filter.
     * @param {TripMemberFindUniqueArgs} args - Arguments to find a TripMember
     * @example
     * // Get one TripMember
     * const tripMember = await prisma.tripMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripMemberFindUniqueArgs>(args: SelectSubset<T, TripMemberFindUniqueArgs<ExtArgs>>): Prisma__TripMemberClient<$Result.GetResult<Prisma.$TripMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TripMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TripMemberFindUniqueOrThrowArgs} args - Arguments to find a TripMember
     * @example
     * // Get one TripMember
     * const tripMember = await prisma.tripMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, TripMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripMemberClient<$Result.GetResult<Prisma.$TripMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripMemberFindFirstArgs} args - Arguments to find a TripMember
     * @example
     * // Get one TripMember
     * const tripMember = await prisma.tripMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripMemberFindFirstArgs>(args?: SelectSubset<T, TripMemberFindFirstArgs<ExtArgs>>): Prisma__TripMemberClient<$Result.GetResult<Prisma.$TripMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripMemberFindFirstOrThrowArgs} args - Arguments to find a TripMember
     * @example
     * // Get one TripMember
     * const tripMember = await prisma.tripMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, TripMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripMemberClient<$Result.GetResult<Prisma.$TripMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TripMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TripMembers
     * const tripMembers = await prisma.tripMember.findMany()
     * 
     * // Get first 10 TripMembers
     * const tripMembers = await prisma.tripMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripMemberWithIdOnly = await prisma.tripMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TripMemberFindManyArgs>(args?: SelectSubset<T, TripMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TripMember.
     * @param {TripMemberCreateArgs} args - Arguments to create a TripMember.
     * @example
     * // Create one TripMember
     * const TripMember = await prisma.tripMember.create({
     *   data: {
     *     // ... data to create a TripMember
     *   }
     * })
     * 
     */
    create<T extends TripMemberCreateArgs>(args: SelectSubset<T, TripMemberCreateArgs<ExtArgs>>): Prisma__TripMemberClient<$Result.GetResult<Prisma.$TripMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TripMembers.
     * @param {TripMemberCreateManyArgs} args - Arguments to create many TripMembers.
     * @example
     * // Create many TripMembers
     * const tripMember = await prisma.tripMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripMemberCreateManyArgs>(args?: SelectSubset<T, TripMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TripMembers and returns the data saved in the database.
     * @param {TripMemberCreateManyAndReturnArgs} args - Arguments to create many TripMembers.
     * @example
     * // Create many TripMembers
     * const tripMember = await prisma.tripMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TripMembers and only return the `id`
     * const tripMemberWithIdOnly = await prisma.tripMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TripMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, TripMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TripMember.
     * @param {TripMemberDeleteArgs} args - Arguments to delete one TripMember.
     * @example
     * // Delete one TripMember
     * const TripMember = await prisma.tripMember.delete({
     *   where: {
     *     // ... filter to delete one TripMember
     *   }
     * })
     * 
     */
    delete<T extends TripMemberDeleteArgs>(args: SelectSubset<T, TripMemberDeleteArgs<ExtArgs>>): Prisma__TripMemberClient<$Result.GetResult<Prisma.$TripMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TripMember.
     * @param {TripMemberUpdateArgs} args - Arguments to update one TripMember.
     * @example
     * // Update one TripMember
     * const tripMember = await prisma.tripMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripMemberUpdateArgs>(args: SelectSubset<T, TripMemberUpdateArgs<ExtArgs>>): Prisma__TripMemberClient<$Result.GetResult<Prisma.$TripMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TripMembers.
     * @param {TripMemberDeleteManyArgs} args - Arguments to filter TripMembers to delete.
     * @example
     * // Delete a few TripMembers
     * const { count } = await prisma.tripMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripMemberDeleteManyArgs>(args?: SelectSubset<T, TripMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TripMembers
     * const tripMember = await prisma.tripMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripMemberUpdateManyArgs>(args: SelectSubset<T, TripMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripMembers and returns the data updated in the database.
     * @param {TripMemberUpdateManyAndReturnArgs} args - Arguments to update many TripMembers.
     * @example
     * // Update many TripMembers
     * const tripMember = await prisma.tripMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TripMembers and only return the `id`
     * const tripMemberWithIdOnly = await prisma.tripMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TripMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, TripMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TripMember.
     * @param {TripMemberUpsertArgs} args - Arguments to update or create a TripMember.
     * @example
     * // Update or create a TripMember
     * const tripMember = await prisma.tripMember.upsert({
     *   create: {
     *     // ... data to create a TripMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TripMember we want to update
     *   }
     * })
     */
    upsert<T extends TripMemberUpsertArgs>(args: SelectSubset<T, TripMemberUpsertArgs<ExtArgs>>): Prisma__TripMemberClient<$Result.GetResult<Prisma.$TripMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TripMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripMemberCountArgs} args - Arguments to filter TripMembers to count.
     * @example
     * // Count the number of TripMembers
     * const count = await prisma.tripMember.count({
     *   where: {
     *     // ... the filter for the TripMembers we want to count
     *   }
     * })
    **/
    count<T extends TripMemberCountArgs>(
      args?: Subset<T, TripMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TripMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TripMemberAggregateArgs>(args: Subset<T, TripMemberAggregateArgs>): Prisma.PrismaPromise<GetTripMemberAggregateType<T>>

    /**
     * Group by TripMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripMemberGroupByArgs} args - Group by arguments.
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
      T extends TripMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripMemberGroupByArgs['orderBy'] }
        : { orderBy?: TripMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TripMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TripMember model
   */
  readonly fields: TripMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TripMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TripMember model
   */
  interface TripMemberFieldRefs {
    readonly id: FieldRef<"TripMember", 'String'>
    readonly tripId: FieldRef<"TripMember", 'String'>
    readonly userId: FieldRef<"TripMember", 'String'>
    readonly role: FieldRef<"TripMember", 'TripMemberRole'>
    readonly joinedAt: FieldRef<"TripMember", 'DateTime'>
    readonly addedByUserId: FieldRef<"TripMember", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TripMember findUnique
   */
  export type TripMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripMember
     */
    select?: TripMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripMember
     */
    omit?: TripMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripMemberInclude<ExtArgs> | null
    /**
     * Filter, which TripMember to fetch.
     */
    where: TripMemberWhereUniqueInput
  }

  /**
   * TripMember findUniqueOrThrow
   */
  export type TripMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripMember
     */
    select?: TripMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripMember
     */
    omit?: TripMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripMemberInclude<ExtArgs> | null
    /**
     * Filter, which TripMember to fetch.
     */
    where: TripMemberWhereUniqueInput
  }

  /**
   * TripMember findFirst
   */
  export type TripMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripMember
     */
    select?: TripMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripMember
     */
    omit?: TripMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripMemberInclude<ExtArgs> | null
    /**
     * Filter, which TripMember to fetch.
     */
    where?: TripMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripMembers to fetch.
     */
    orderBy?: TripMemberOrderByWithRelationInput | TripMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripMembers.
     */
    cursor?: TripMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripMembers.
     */
    distinct?: TripMemberScalarFieldEnum | TripMemberScalarFieldEnum[]
  }

  /**
   * TripMember findFirstOrThrow
   */
  export type TripMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripMember
     */
    select?: TripMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripMember
     */
    omit?: TripMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripMemberInclude<ExtArgs> | null
    /**
     * Filter, which TripMember to fetch.
     */
    where?: TripMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripMembers to fetch.
     */
    orderBy?: TripMemberOrderByWithRelationInput | TripMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripMembers.
     */
    cursor?: TripMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripMembers.
     */
    distinct?: TripMemberScalarFieldEnum | TripMemberScalarFieldEnum[]
  }

  /**
   * TripMember findMany
   */
  export type TripMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripMember
     */
    select?: TripMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripMember
     */
    omit?: TripMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripMemberInclude<ExtArgs> | null
    /**
     * Filter, which TripMembers to fetch.
     */
    where?: TripMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripMembers to fetch.
     */
    orderBy?: TripMemberOrderByWithRelationInput | TripMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TripMembers.
     */
    cursor?: TripMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripMembers.
     */
    distinct?: TripMemberScalarFieldEnum | TripMemberScalarFieldEnum[]
  }

  /**
   * TripMember create
   */
  export type TripMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripMember
     */
    select?: TripMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripMember
     */
    omit?: TripMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a TripMember.
     */
    data: XOR<TripMemberCreateInput, TripMemberUncheckedCreateInput>
  }

  /**
   * TripMember createMany
   */
  export type TripMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TripMembers.
     */
    data: TripMemberCreateManyInput | TripMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TripMember createManyAndReturn
   */
  export type TripMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripMember
     */
    select?: TripMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripMember
     */
    omit?: TripMemberOmit<ExtArgs> | null
    /**
     * The data used to create many TripMembers.
     */
    data: TripMemberCreateManyInput | TripMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripMember update
   */
  export type TripMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripMember
     */
    select?: TripMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripMember
     */
    omit?: TripMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a TripMember.
     */
    data: XOR<TripMemberUpdateInput, TripMemberUncheckedUpdateInput>
    /**
     * Choose, which TripMember to update.
     */
    where: TripMemberWhereUniqueInput
  }

  /**
   * TripMember updateMany
   */
  export type TripMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TripMembers.
     */
    data: XOR<TripMemberUpdateManyMutationInput, TripMemberUncheckedUpdateManyInput>
    /**
     * Filter which TripMembers to update
     */
    where?: TripMemberWhereInput
    /**
     * Limit how many TripMembers to update.
     */
    limit?: number
  }

  /**
   * TripMember updateManyAndReturn
   */
  export type TripMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripMember
     */
    select?: TripMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripMember
     */
    omit?: TripMemberOmit<ExtArgs> | null
    /**
     * The data used to update TripMembers.
     */
    data: XOR<TripMemberUpdateManyMutationInput, TripMemberUncheckedUpdateManyInput>
    /**
     * Filter which TripMembers to update
     */
    where?: TripMemberWhereInput
    /**
     * Limit how many TripMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripMember upsert
   */
  export type TripMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripMember
     */
    select?: TripMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripMember
     */
    omit?: TripMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the TripMember to update in case it exists.
     */
    where: TripMemberWhereUniqueInput
    /**
     * In case the TripMember found by the `where` argument doesn't exist, create a new TripMember with this data.
     */
    create: XOR<TripMemberCreateInput, TripMemberUncheckedCreateInput>
    /**
     * In case the TripMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripMemberUpdateInput, TripMemberUncheckedUpdateInput>
  }

  /**
   * TripMember delete
   */
  export type TripMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripMember
     */
    select?: TripMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripMember
     */
    omit?: TripMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripMemberInclude<ExtArgs> | null
    /**
     * Filter which TripMember to delete.
     */
    where: TripMemberWhereUniqueInput
  }

  /**
   * TripMember deleteMany
   */
  export type TripMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripMembers to delete
     */
    where?: TripMemberWhereInput
    /**
     * Limit how many TripMembers to delete.
     */
    limit?: number
  }

  /**
   * TripMember without action
   */
  export type TripMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripMember
     */
    select?: TripMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripMember
     */
    omit?: TripMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripMemberInclude<ExtArgs> | null
  }


  /**
   * Model TripDay
   */

  export type AggregateTripDay = {
    _count: TripDayCountAggregateOutputType | null
    _avg: TripDayAvgAggregateOutputType | null
    _sum: TripDaySumAggregateOutputType | null
    _min: TripDayMinAggregateOutputType | null
    _max: TripDayMaxAggregateOutputType | null
  }

  export type TripDayAvgAggregateOutputType = {
    dayNumber: number | null
  }

  export type TripDaySumAggregateOutputType = {
    dayNumber: number | null
  }

  export type TripDayMinAggregateOutputType = {
    id: string | null
    tripId: string | null
    dayNumber: number | null
    date: Date | null
    title: string | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TripDayMaxAggregateOutputType = {
    id: string | null
    tripId: string | null
    dayNumber: number | null
    date: Date | null
    title: string | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TripDayCountAggregateOutputType = {
    id: number
    tripId: number
    dayNumber: number
    date: number
    title: number
    note: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TripDayAvgAggregateInputType = {
    dayNumber?: true
  }

  export type TripDaySumAggregateInputType = {
    dayNumber?: true
  }

  export type TripDayMinAggregateInputType = {
    id?: true
    tripId?: true
    dayNumber?: true
    date?: true
    title?: true
    note?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TripDayMaxAggregateInputType = {
    id?: true
    tripId?: true
    dayNumber?: true
    date?: true
    title?: true
    note?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TripDayCountAggregateInputType = {
    id?: true
    tripId?: true
    dayNumber?: true
    date?: true
    title?: true
    note?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TripDayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripDay to aggregate.
     */
    where?: TripDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripDays to fetch.
     */
    orderBy?: TripDayOrderByWithRelationInput | TripDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TripDays
    **/
    _count?: true | TripDayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TripDayAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TripDaySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripDayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripDayMaxAggregateInputType
  }

  export type GetTripDayAggregateType<T extends TripDayAggregateArgs> = {
        [P in keyof T & keyof AggregateTripDay]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTripDay[P]>
      : GetScalarType<T[P], AggregateTripDay[P]>
  }




  export type TripDayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripDayWhereInput
    orderBy?: TripDayOrderByWithAggregationInput | TripDayOrderByWithAggregationInput[]
    by: TripDayScalarFieldEnum[] | TripDayScalarFieldEnum
    having?: TripDayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripDayCountAggregateInputType | true
    _avg?: TripDayAvgAggregateInputType
    _sum?: TripDaySumAggregateInputType
    _min?: TripDayMinAggregateInputType
    _max?: TripDayMaxAggregateInputType
  }

  export type TripDayGroupByOutputType = {
    id: string
    tripId: string
    dayNumber: number
    date: Date
    title: string | null
    note: string | null
    createdAt: Date
    updatedAt: Date
    _count: TripDayCountAggregateOutputType | null
    _avg: TripDayAvgAggregateOutputType | null
    _sum: TripDaySumAggregateOutputType | null
    _min: TripDayMinAggregateOutputType | null
    _max: TripDayMaxAggregateOutputType | null
  }

  type GetTripDayGroupByPayload<T extends TripDayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripDayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripDayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripDayGroupByOutputType[P]>
            : GetScalarType<T[P], TripDayGroupByOutputType[P]>
        }
      >
    >


  export type TripDaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    dayNumber?: boolean
    date?: boolean
    title?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
    items?: boolean | TripDay$itemsArgs<ExtArgs>
    _count?: boolean | TripDayCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripDay"]>

  export type TripDaySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    dayNumber?: boolean
    date?: boolean
    title?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripDay"]>

  export type TripDaySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    dayNumber?: boolean
    date?: boolean
    title?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripDay"]>

  export type TripDaySelectScalar = {
    id?: boolean
    tripId?: boolean
    dayNumber?: boolean
    date?: boolean
    title?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TripDayOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tripId" | "dayNumber" | "date" | "title" | "note" | "createdAt" | "updatedAt", ExtArgs["result"]["tripDay"]>
  export type TripDayInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
    items?: boolean | TripDay$itemsArgs<ExtArgs>
    _count?: boolean | TripDayCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TripDayIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type TripDayIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }

  export type $TripDayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TripDay"
    objects: {
      trip: Prisma.$TripPayload<ExtArgs>
      items: Prisma.$ItineraryItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tripId: string
      dayNumber: number
      date: Date
      title: string | null
      note: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tripDay"]>
    composites: {}
  }

  type TripDayGetPayload<S extends boolean | null | undefined | TripDayDefaultArgs> = $Result.GetResult<Prisma.$TripDayPayload, S>

  type TripDayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TripDayFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripDayCountAggregateInputType | true
    }

  export interface TripDayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TripDay'], meta: { name: 'TripDay' } }
    /**
     * Find zero or one TripDay that matches the filter.
     * @param {TripDayFindUniqueArgs} args - Arguments to find a TripDay
     * @example
     * // Get one TripDay
     * const tripDay = await prisma.tripDay.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripDayFindUniqueArgs>(args: SelectSubset<T, TripDayFindUniqueArgs<ExtArgs>>): Prisma__TripDayClient<$Result.GetResult<Prisma.$TripDayPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TripDay that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TripDayFindUniqueOrThrowArgs} args - Arguments to find a TripDay
     * @example
     * // Get one TripDay
     * const tripDay = await prisma.tripDay.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripDayFindUniqueOrThrowArgs>(args: SelectSubset<T, TripDayFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripDayClient<$Result.GetResult<Prisma.$TripDayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripDay that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripDayFindFirstArgs} args - Arguments to find a TripDay
     * @example
     * // Get one TripDay
     * const tripDay = await prisma.tripDay.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripDayFindFirstArgs>(args?: SelectSubset<T, TripDayFindFirstArgs<ExtArgs>>): Prisma__TripDayClient<$Result.GetResult<Prisma.$TripDayPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripDay that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripDayFindFirstOrThrowArgs} args - Arguments to find a TripDay
     * @example
     * // Get one TripDay
     * const tripDay = await prisma.tripDay.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripDayFindFirstOrThrowArgs>(args?: SelectSubset<T, TripDayFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripDayClient<$Result.GetResult<Prisma.$TripDayPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TripDays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripDayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TripDays
     * const tripDays = await prisma.tripDay.findMany()
     * 
     * // Get first 10 TripDays
     * const tripDays = await prisma.tripDay.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripDayWithIdOnly = await prisma.tripDay.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TripDayFindManyArgs>(args?: SelectSubset<T, TripDayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripDayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TripDay.
     * @param {TripDayCreateArgs} args - Arguments to create a TripDay.
     * @example
     * // Create one TripDay
     * const TripDay = await prisma.tripDay.create({
     *   data: {
     *     // ... data to create a TripDay
     *   }
     * })
     * 
     */
    create<T extends TripDayCreateArgs>(args: SelectSubset<T, TripDayCreateArgs<ExtArgs>>): Prisma__TripDayClient<$Result.GetResult<Prisma.$TripDayPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TripDays.
     * @param {TripDayCreateManyArgs} args - Arguments to create many TripDays.
     * @example
     * // Create many TripDays
     * const tripDay = await prisma.tripDay.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripDayCreateManyArgs>(args?: SelectSubset<T, TripDayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TripDays and returns the data saved in the database.
     * @param {TripDayCreateManyAndReturnArgs} args - Arguments to create many TripDays.
     * @example
     * // Create many TripDays
     * const tripDay = await prisma.tripDay.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TripDays and only return the `id`
     * const tripDayWithIdOnly = await prisma.tripDay.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TripDayCreateManyAndReturnArgs>(args?: SelectSubset<T, TripDayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripDayPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TripDay.
     * @param {TripDayDeleteArgs} args - Arguments to delete one TripDay.
     * @example
     * // Delete one TripDay
     * const TripDay = await prisma.tripDay.delete({
     *   where: {
     *     // ... filter to delete one TripDay
     *   }
     * })
     * 
     */
    delete<T extends TripDayDeleteArgs>(args: SelectSubset<T, TripDayDeleteArgs<ExtArgs>>): Prisma__TripDayClient<$Result.GetResult<Prisma.$TripDayPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TripDay.
     * @param {TripDayUpdateArgs} args - Arguments to update one TripDay.
     * @example
     * // Update one TripDay
     * const tripDay = await prisma.tripDay.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripDayUpdateArgs>(args: SelectSubset<T, TripDayUpdateArgs<ExtArgs>>): Prisma__TripDayClient<$Result.GetResult<Prisma.$TripDayPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TripDays.
     * @param {TripDayDeleteManyArgs} args - Arguments to filter TripDays to delete.
     * @example
     * // Delete a few TripDays
     * const { count } = await prisma.tripDay.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripDayDeleteManyArgs>(args?: SelectSubset<T, TripDayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripDayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TripDays
     * const tripDay = await prisma.tripDay.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripDayUpdateManyArgs>(args: SelectSubset<T, TripDayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripDays and returns the data updated in the database.
     * @param {TripDayUpdateManyAndReturnArgs} args - Arguments to update many TripDays.
     * @example
     * // Update many TripDays
     * const tripDay = await prisma.tripDay.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TripDays and only return the `id`
     * const tripDayWithIdOnly = await prisma.tripDay.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TripDayUpdateManyAndReturnArgs>(args: SelectSubset<T, TripDayUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripDayPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TripDay.
     * @param {TripDayUpsertArgs} args - Arguments to update or create a TripDay.
     * @example
     * // Update or create a TripDay
     * const tripDay = await prisma.tripDay.upsert({
     *   create: {
     *     // ... data to create a TripDay
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TripDay we want to update
     *   }
     * })
     */
    upsert<T extends TripDayUpsertArgs>(args: SelectSubset<T, TripDayUpsertArgs<ExtArgs>>): Prisma__TripDayClient<$Result.GetResult<Prisma.$TripDayPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TripDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripDayCountArgs} args - Arguments to filter TripDays to count.
     * @example
     * // Count the number of TripDays
     * const count = await prisma.tripDay.count({
     *   where: {
     *     // ... the filter for the TripDays we want to count
     *   }
     * })
    **/
    count<T extends TripDayCountArgs>(
      args?: Subset<T, TripDayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripDayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TripDay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripDayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TripDayAggregateArgs>(args: Subset<T, TripDayAggregateArgs>): Prisma.PrismaPromise<GetTripDayAggregateType<T>>

    /**
     * Group by TripDay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripDayGroupByArgs} args - Group by arguments.
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
      T extends TripDayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripDayGroupByArgs['orderBy'] }
        : { orderBy?: TripDayGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TripDayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripDayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TripDay model
   */
  readonly fields: TripDayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TripDay.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripDayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends TripDay$itemsArgs<ExtArgs> = {}>(args?: Subset<T, TripDay$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItineraryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TripDay model
   */
  interface TripDayFieldRefs {
    readonly id: FieldRef<"TripDay", 'String'>
    readonly tripId: FieldRef<"TripDay", 'String'>
    readonly dayNumber: FieldRef<"TripDay", 'Int'>
    readonly date: FieldRef<"TripDay", 'DateTime'>
    readonly title: FieldRef<"TripDay", 'String'>
    readonly note: FieldRef<"TripDay", 'String'>
    readonly createdAt: FieldRef<"TripDay", 'DateTime'>
    readonly updatedAt: FieldRef<"TripDay", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TripDay findUnique
   */
  export type TripDayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDay
     */
    select?: TripDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripDay
     */
    omit?: TripDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDayInclude<ExtArgs> | null
    /**
     * Filter, which TripDay to fetch.
     */
    where: TripDayWhereUniqueInput
  }

  /**
   * TripDay findUniqueOrThrow
   */
  export type TripDayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDay
     */
    select?: TripDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripDay
     */
    omit?: TripDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDayInclude<ExtArgs> | null
    /**
     * Filter, which TripDay to fetch.
     */
    where: TripDayWhereUniqueInput
  }

  /**
   * TripDay findFirst
   */
  export type TripDayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDay
     */
    select?: TripDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripDay
     */
    omit?: TripDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDayInclude<ExtArgs> | null
    /**
     * Filter, which TripDay to fetch.
     */
    where?: TripDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripDays to fetch.
     */
    orderBy?: TripDayOrderByWithRelationInput | TripDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripDays.
     */
    cursor?: TripDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripDays.
     */
    distinct?: TripDayScalarFieldEnum | TripDayScalarFieldEnum[]
  }

  /**
   * TripDay findFirstOrThrow
   */
  export type TripDayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDay
     */
    select?: TripDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripDay
     */
    omit?: TripDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDayInclude<ExtArgs> | null
    /**
     * Filter, which TripDay to fetch.
     */
    where?: TripDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripDays to fetch.
     */
    orderBy?: TripDayOrderByWithRelationInput | TripDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripDays.
     */
    cursor?: TripDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripDays.
     */
    distinct?: TripDayScalarFieldEnum | TripDayScalarFieldEnum[]
  }

  /**
   * TripDay findMany
   */
  export type TripDayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDay
     */
    select?: TripDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripDay
     */
    omit?: TripDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDayInclude<ExtArgs> | null
    /**
     * Filter, which TripDays to fetch.
     */
    where?: TripDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripDays to fetch.
     */
    orderBy?: TripDayOrderByWithRelationInput | TripDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TripDays.
     */
    cursor?: TripDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripDays.
     */
    distinct?: TripDayScalarFieldEnum | TripDayScalarFieldEnum[]
  }

  /**
   * TripDay create
   */
  export type TripDayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDay
     */
    select?: TripDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripDay
     */
    omit?: TripDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDayInclude<ExtArgs> | null
    /**
     * The data needed to create a TripDay.
     */
    data: XOR<TripDayCreateInput, TripDayUncheckedCreateInput>
  }

  /**
   * TripDay createMany
   */
  export type TripDayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TripDays.
     */
    data: TripDayCreateManyInput | TripDayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TripDay createManyAndReturn
   */
  export type TripDayCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDay
     */
    select?: TripDaySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripDay
     */
    omit?: TripDayOmit<ExtArgs> | null
    /**
     * The data used to create many TripDays.
     */
    data: TripDayCreateManyInput | TripDayCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDayIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripDay update
   */
  export type TripDayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDay
     */
    select?: TripDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripDay
     */
    omit?: TripDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDayInclude<ExtArgs> | null
    /**
     * The data needed to update a TripDay.
     */
    data: XOR<TripDayUpdateInput, TripDayUncheckedUpdateInput>
    /**
     * Choose, which TripDay to update.
     */
    where: TripDayWhereUniqueInput
  }

  /**
   * TripDay updateMany
   */
  export type TripDayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TripDays.
     */
    data: XOR<TripDayUpdateManyMutationInput, TripDayUncheckedUpdateManyInput>
    /**
     * Filter which TripDays to update
     */
    where?: TripDayWhereInput
    /**
     * Limit how many TripDays to update.
     */
    limit?: number
  }

  /**
   * TripDay updateManyAndReturn
   */
  export type TripDayUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDay
     */
    select?: TripDaySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripDay
     */
    omit?: TripDayOmit<ExtArgs> | null
    /**
     * The data used to update TripDays.
     */
    data: XOR<TripDayUpdateManyMutationInput, TripDayUncheckedUpdateManyInput>
    /**
     * Filter which TripDays to update
     */
    where?: TripDayWhereInput
    /**
     * Limit how many TripDays to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDayIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripDay upsert
   */
  export type TripDayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDay
     */
    select?: TripDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripDay
     */
    omit?: TripDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDayInclude<ExtArgs> | null
    /**
     * The filter to search for the TripDay to update in case it exists.
     */
    where: TripDayWhereUniqueInput
    /**
     * In case the TripDay found by the `where` argument doesn't exist, create a new TripDay with this data.
     */
    create: XOR<TripDayCreateInput, TripDayUncheckedCreateInput>
    /**
     * In case the TripDay was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripDayUpdateInput, TripDayUncheckedUpdateInput>
  }

  /**
   * TripDay delete
   */
  export type TripDayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDay
     */
    select?: TripDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripDay
     */
    omit?: TripDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDayInclude<ExtArgs> | null
    /**
     * Filter which TripDay to delete.
     */
    where: TripDayWhereUniqueInput
  }

  /**
   * TripDay deleteMany
   */
  export type TripDayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripDays to delete
     */
    where?: TripDayWhereInput
    /**
     * Limit how many TripDays to delete.
     */
    limit?: number
  }

  /**
   * TripDay.items
   */
  export type TripDay$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItineraryItem
     */
    select?: ItineraryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItineraryItem
     */
    omit?: ItineraryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItineraryItemInclude<ExtArgs> | null
    where?: ItineraryItemWhereInput
    orderBy?: ItineraryItemOrderByWithRelationInput | ItineraryItemOrderByWithRelationInput[]
    cursor?: ItineraryItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItineraryItemScalarFieldEnum | ItineraryItemScalarFieldEnum[]
  }

  /**
   * TripDay without action
   */
  export type TripDayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDay
     */
    select?: TripDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripDay
     */
    omit?: TripDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDayInclude<ExtArgs> | null
  }


  /**
   * Model ItineraryItem
   */

  export type AggregateItineraryItem = {
    _count: ItineraryItemCountAggregateOutputType | null
    _avg: ItineraryItemAvgAggregateOutputType | null
    _sum: ItineraryItemSumAggregateOutputType | null
    _min: ItineraryItemMinAggregateOutputType | null
    _max: ItineraryItemMaxAggregateOutputType | null
  }

  export type ItineraryItemAvgAggregateOutputType = {
    latitude: Decimal | null
    longitude: Decimal | null
    estimatedCost: Decimal | null
    sortOrder: number | null
  }

  export type ItineraryItemSumAggregateOutputType = {
    latitude: Decimal | null
    longitude: Decimal | null
    estimatedCost: Decimal | null
    sortOrder: number | null
  }

  export type ItineraryItemMinAggregateOutputType = {
    id: string | null
    tripDayId: string | null
    title: string | null
    description: string | null
    placeName: string | null
    placeAddress: string | null
    country: string | null
    city: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    startTime: Date | null
    endTime: Date | null
    estimatedCost: Decimal | null
    currency: string | null
    note: string | null
    sortOrder: number | null
    createdByUserId: string | null
    isCompleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItineraryItemMaxAggregateOutputType = {
    id: string | null
    tripDayId: string | null
    title: string | null
    description: string | null
    placeName: string | null
    placeAddress: string | null
    country: string | null
    city: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    startTime: Date | null
    endTime: Date | null
    estimatedCost: Decimal | null
    currency: string | null
    note: string | null
    sortOrder: number | null
    createdByUserId: string | null
    isCompleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItineraryItemCountAggregateOutputType = {
    id: number
    tripDayId: number
    title: number
    description: number
    placeName: number
    placeAddress: number
    country: number
    city: number
    latitude: number
    longitude: number
    startTime: number
    endTime: number
    estimatedCost: number
    currency: number
    note: number
    sortOrder: number
    createdByUserId: number
    isCompleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ItineraryItemAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    estimatedCost?: true
    sortOrder?: true
  }

  export type ItineraryItemSumAggregateInputType = {
    latitude?: true
    longitude?: true
    estimatedCost?: true
    sortOrder?: true
  }

  export type ItineraryItemMinAggregateInputType = {
    id?: true
    tripDayId?: true
    title?: true
    description?: true
    placeName?: true
    placeAddress?: true
    country?: true
    city?: true
    latitude?: true
    longitude?: true
    startTime?: true
    endTime?: true
    estimatedCost?: true
    currency?: true
    note?: true
    sortOrder?: true
    createdByUserId?: true
    isCompleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItineraryItemMaxAggregateInputType = {
    id?: true
    tripDayId?: true
    title?: true
    description?: true
    placeName?: true
    placeAddress?: true
    country?: true
    city?: true
    latitude?: true
    longitude?: true
    startTime?: true
    endTime?: true
    estimatedCost?: true
    currency?: true
    note?: true
    sortOrder?: true
    createdByUserId?: true
    isCompleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItineraryItemCountAggregateInputType = {
    id?: true
    tripDayId?: true
    title?: true
    description?: true
    placeName?: true
    placeAddress?: true
    country?: true
    city?: true
    latitude?: true
    longitude?: true
    startTime?: true
    endTime?: true
    estimatedCost?: true
    currency?: true
    note?: true
    sortOrder?: true
    createdByUserId?: true
    isCompleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ItineraryItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItineraryItem to aggregate.
     */
    where?: ItineraryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItineraryItems to fetch.
     */
    orderBy?: ItineraryItemOrderByWithRelationInput | ItineraryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItineraryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItineraryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItineraryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItineraryItems
    **/
    _count?: true | ItineraryItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItineraryItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItineraryItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItineraryItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItineraryItemMaxAggregateInputType
  }

  export type GetItineraryItemAggregateType<T extends ItineraryItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItineraryItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItineraryItem[P]>
      : GetScalarType<T[P], AggregateItineraryItem[P]>
  }




  export type ItineraryItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItineraryItemWhereInput
    orderBy?: ItineraryItemOrderByWithAggregationInput | ItineraryItemOrderByWithAggregationInput[]
    by: ItineraryItemScalarFieldEnum[] | ItineraryItemScalarFieldEnum
    having?: ItineraryItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItineraryItemCountAggregateInputType | true
    _avg?: ItineraryItemAvgAggregateInputType
    _sum?: ItineraryItemSumAggregateInputType
    _min?: ItineraryItemMinAggregateInputType
    _max?: ItineraryItemMaxAggregateInputType
  }

  export type ItineraryItemGroupByOutputType = {
    id: string
    tripDayId: string
    title: string
    description: string | null
    placeName: string | null
    placeAddress: string | null
    country: string | null
    city: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    startTime: Date | null
    endTime: Date | null
    estimatedCost: Decimal | null
    currency: string | null
    note: string | null
    sortOrder: number
    createdByUserId: string | null
    isCompleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: ItineraryItemCountAggregateOutputType | null
    _avg: ItineraryItemAvgAggregateOutputType | null
    _sum: ItineraryItemSumAggregateOutputType | null
    _min: ItineraryItemMinAggregateOutputType | null
    _max: ItineraryItemMaxAggregateOutputType | null
  }

  type GetItineraryItemGroupByPayload<T extends ItineraryItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItineraryItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItineraryItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItineraryItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItineraryItemGroupByOutputType[P]>
        }
      >
    >


  export type ItineraryItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripDayId?: boolean
    title?: boolean
    description?: boolean
    placeName?: boolean
    placeAddress?: boolean
    country?: boolean
    city?: boolean
    latitude?: boolean
    longitude?: boolean
    startTime?: boolean
    endTime?: boolean
    estimatedCost?: boolean
    currency?: boolean
    note?: boolean
    sortOrder?: boolean
    createdByUserId?: boolean
    isCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tripDay?: boolean | TripDayDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itineraryItem"]>

  export type ItineraryItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripDayId?: boolean
    title?: boolean
    description?: boolean
    placeName?: boolean
    placeAddress?: boolean
    country?: boolean
    city?: boolean
    latitude?: boolean
    longitude?: boolean
    startTime?: boolean
    endTime?: boolean
    estimatedCost?: boolean
    currency?: boolean
    note?: boolean
    sortOrder?: boolean
    createdByUserId?: boolean
    isCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tripDay?: boolean | TripDayDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itineraryItem"]>

  export type ItineraryItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripDayId?: boolean
    title?: boolean
    description?: boolean
    placeName?: boolean
    placeAddress?: boolean
    country?: boolean
    city?: boolean
    latitude?: boolean
    longitude?: boolean
    startTime?: boolean
    endTime?: boolean
    estimatedCost?: boolean
    currency?: boolean
    note?: boolean
    sortOrder?: boolean
    createdByUserId?: boolean
    isCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tripDay?: boolean | TripDayDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itineraryItem"]>

  export type ItineraryItemSelectScalar = {
    id?: boolean
    tripDayId?: boolean
    title?: boolean
    description?: boolean
    placeName?: boolean
    placeAddress?: boolean
    country?: boolean
    city?: boolean
    latitude?: boolean
    longitude?: boolean
    startTime?: boolean
    endTime?: boolean
    estimatedCost?: boolean
    currency?: boolean
    note?: boolean
    sortOrder?: boolean
    createdByUserId?: boolean
    isCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ItineraryItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tripDayId" | "title" | "description" | "placeName" | "placeAddress" | "country" | "city" | "latitude" | "longitude" | "startTime" | "endTime" | "estimatedCost" | "currency" | "note" | "sortOrder" | "createdByUserId" | "isCompleted" | "createdAt" | "updatedAt", ExtArgs["result"]["itineraryItem"]>
  export type ItineraryItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tripDay?: boolean | TripDayDefaultArgs<ExtArgs>
  }
  export type ItineraryItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tripDay?: boolean | TripDayDefaultArgs<ExtArgs>
  }
  export type ItineraryItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tripDay?: boolean | TripDayDefaultArgs<ExtArgs>
  }

  export type $ItineraryItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItineraryItem"
    objects: {
      tripDay: Prisma.$TripDayPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tripDayId: string
      title: string
      description: string | null
      placeName: string | null
      placeAddress: string | null
      country: string | null
      city: string | null
      latitude: Prisma.Decimal | null
      longitude: Prisma.Decimal | null
      startTime: Date | null
      endTime: Date | null
      estimatedCost: Prisma.Decimal | null
      currency: string | null
      note: string | null
      sortOrder: number
      createdByUserId: string | null
      isCompleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["itineraryItem"]>
    composites: {}
  }

  type ItineraryItemGetPayload<S extends boolean | null | undefined | ItineraryItemDefaultArgs> = $Result.GetResult<Prisma.$ItineraryItemPayload, S>

  type ItineraryItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItineraryItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItineraryItemCountAggregateInputType | true
    }

  export interface ItineraryItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItineraryItem'], meta: { name: 'ItineraryItem' } }
    /**
     * Find zero or one ItineraryItem that matches the filter.
     * @param {ItineraryItemFindUniqueArgs} args - Arguments to find a ItineraryItem
     * @example
     * // Get one ItineraryItem
     * const itineraryItem = await prisma.itineraryItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItineraryItemFindUniqueArgs>(args: SelectSubset<T, ItineraryItemFindUniqueArgs<ExtArgs>>): Prisma__ItineraryItemClient<$Result.GetResult<Prisma.$ItineraryItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItineraryItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItineraryItemFindUniqueOrThrowArgs} args - Arguments to find a ItineraryItem
     * @example
     * // Get one ItineraryItem
     * const itineraryItem = await prisma.itineraryItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItineraryItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ItineraryItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItineraryItemClient<$Result.GetResult<Prisma.$ItineraryItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItineraryItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItineraryItemFindFirstArgs} args - Arguments to find a ItineraryItem
     * @example
     * // Get one ItineraryItem
     * const itineraryItem = await prisma.itineraryItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItineraryItemFindFirstArgs>(args?: SelectSubset<T, ItineraryItemFindFirstArgs<ExtArgs>>): Prisma__ItineraryItemClient<$Result.GetResult<Prisma.$ItineraryItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItineraryItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItineraryItemFindFirstOrThrowArgs} args - Arguments to find a ItineraryItem
     * @example
     * // Get one ItineraryItem
     * const itineraryItem = await prisma.itineraryItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItineraryItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ItineraryItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItineraryItemClient<$Result.GetResult<Prisma.$ItineraryItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItineraryItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItineraryItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItineraryItems
     * const itineraryItems = await prisma.itineraryItem.findMany()
     * 
     * // Get first 10 ItineraryItems
     * const itineraryItems = await prisma.itineraryItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itineraryItemWithIdOnly = await prisma.itineraryItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItineraryItemFindManyArgs>(args?: SelectSubset<T, ItineraryItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItineraryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItineraryItem.
     * @param {ItineraryItemCreateArgs} args - Arguments to create a ItineraryItem.
     * @example
     * // Create one ItineraryItem
     * const ItineraryItem = await prisma.itineraryItem.create({
     *   data: {
     *     // ... data to create a ItineraryItem
     *   }
     * })
     * 
     */
    create<T extends ItineraryItemCreateArgs>(args: SelectSubset<T, ItineraryItemCreateArgs<ExtArgs>>): Prisma__ItineraryItemClient<$Result.GetResult<Prisma.$ItineraryItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItineraryItems.
     * @param {ItineraryItemCreateManyArgs} args - Arguments to create many ItineraryItems.
     * @example
     * // Create many ItineraryItems
     * const itineraryItem = await prisma.itineraryItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItineraryItemCreateManyArgs>(args?: SelectSubset<T, ItineraryItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItineraryItems and returns the data saved in the database.
     * @param {ItineraryItemCreateManyAndReturnArgs} args - Arguments to create many ItineraryItems.
     * @example
     * // Create many ItineraryItems
     * const itineraryItem = await prisma.itineraryItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItineraryItems and only return the `id`
     * const itineraryItemWithIdOnly = await prisma.itineraryItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItineraryItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ItineraryItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItineraryItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItineraryItem.
     * @param {ItineraryItemDeleteArgs} args - Arguments to delete one ItineraryItem.
     * @example
     * // Delete one ItineraryItem
     * const ItineraryItem = await prisma.itineraryItem.delete({
     *   where: {
     *     // ... filter to delete one ItineraryItem
     *   }
     * })
     * 
     */
    delete<T extends ItineraryItemDeleteArgs>(args: SelectSubset<T, ItineraryItemDeleteArgs<ExtArgs>>): Prisma__ItineraryItemClient<$Result.GetResult<Prisma.$ItineraryItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItineraryItem.
     * @param {ItineraryItemUpdateArgs} args - Arguments to update one ItineraryItem.
     * @example
     * // Update one ItineraryItem
     * const itineraryItem = await prisma.itineraryItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItineraryItemUpdateArgs>(args: SelectSubset<T, ItineraryItemUpdateArgs<ExtArgs>>): Prisma__ItineraryItemClient<$Result.GetResult<Prisma.$ItineraryItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItineraryItems.
     * @param {ItineraryItemDeleteManyArgs} args - Arguments to filter ItineraryItems to delete.
     * @example
     * // Delete a few ItineraryItems
     * const { count } = await prisma.itineraryItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItineraryItemDeleteManyArgs>(args?: SelectSubset<T, ItineraryItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItineraryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItineraryItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItineraryItems
     * const itineraryItem = await prisma.itineraryItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItineraryItemUpdateManyArgs>(args: SelectSubset<T, ItineraryItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItineraryItems and returns the data updated in the database.
     * @param {ItineraryItemUpdateManyAndReturnArgs} args - Arguments to update many ItineraryItems.
     * @example
     * // Update many ItineraryItems
     * const itineraryItem = await prisma.itineraryItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItineraryItems and only return the `id`
     * const itineraryItemWithIdOnly = await prisma.itineraryItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItineraryItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ItineraryItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItineraryItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItineraryItem.
     * @param {ItineraryItemUpsertArgs} args - Arguments to update or create a ItineraryItem.
     * @example
     * // Update or create a ItineraryItem
     * const itineraryItem = await prisma.itineraryItem.upsert({
     *   create: {
     *     // ... data to create a ItineraryItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItineraryItem we want to update
     *   }
     * })
     */
    upsert<T extends ItineraryItemUpsertArgs>(args: SelectSubset<T, ItineraryItemUpsertArgs<ExtArgs>>): Prisma__ItineraryItemClient<$Result.GetResult<Prisma.$ItineraryItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItineraryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItineraryItemCountArgs} args - Arguments to filter ItineraryItems to count.
     * @example
     * // Count the number of ItineraryItems
     * const count = await prisma.itineraryItem.count({
     *   where: {
     *     // ... the filter for the ItineraryItems we want to count
     *   }
     * })
    **/
    count<T extends ItineraryItemCountArgs>(
      args?: Subset<T, ItineraryItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItineraryItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItineraryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItineraryItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItineraryItemAggregateArgs>(args: Subset<T, ItineraryItemAggregateArgs>): Prisma.PrismaPromise<GetItineraryItemAggregateType<T>>

    /**
     * Group by ItineraryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItineraryItemGroupByArgs} args - Group by arguments.
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
      T extends ItineraryItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItineraryItemGroupByArgs['orderBy'] }
        : { orderBy?: ItineraryItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ItineraryItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItineraryItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItineraryItem model
   */
  readonly fields: ItineraryItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItineraryItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItineraryItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tripDay<T extends TripDayDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDayDefaultArgs<ExtArgs>>): Prisma__TripDayClient<$Result.GetResult<Prisma.$TripDayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItineraryItem model
   */
  interface ItineraryItemFieldRefs {
    readonly id: FieldRef<"ItineraryItem", 'String'>
    readonly tripDayId: FieldRef<"ItineraryItem", 'String'>
    readonly title: FieldRef<"ItineraryItem", 'String'>
    readonly description: FieldRef<"ItineraryItem", 'String'>
    readonly placeName: FieldRef<"ItineraryItem", 'String'>
    readonly placeAddress: FieldRef<"ItineraryItem", 'String'>
    readonly country: FieldRef<"ItineraryItem", 'String'>
    readonly city: FieldRef<"ItineraryItem", 'String'>
    readonly latitude: FieldRef<"ItineraryItem", 'Decimal'>
    readonly longitude: FieldRef<"ItineraryItem", 'Decimal'>
    readonly startTime: FieldRef<"ItineraryItem", 'DateTime'>
    readonly endTime: FieldRef<"ItineraryItem", 'DateTime'>
    readonly estimatedCost: FieldRef<"ItineraryItem", 'Decimal'>
    readonly currency: FieldRef<"ItineraryItem", 'String'>
    readonly note: FieldRef<"ItineraryItem", 'String'>
    readonly sortOrder: FieldRef<"ItineraryItem", 'Int'>
    readonly createdByUserId: FieldRef<"ItineraryItem", 'String'>
    readonly isCompleted: FieldRef<"ItineraryItem", 'Boolean'>
    readonly createdAt: FieldRef<"ItineraryItem", 'DateTime'>
    readonly updatedAt: FieldRef<"ItineraryItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ItineraryItem findUnique
   */
  export type ItineraryItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItineraryItem
     */
    select?: ItineraryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItineraryItem
     */
    omit?: ItineraryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItineraryItemInclude<ExtArgs> | null
    /**
     * Filter, which ItineraryItem to fetch.
     */
    where: ItineraryItemWhereUniqueInput
  }

  /**
   * ItineraryItem findUniqueOrThrow
   */
  export type ItineraryItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItineraryItem
     */
    select?: ItineraryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItineraryItem
     */
    omit?: ItineraryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItineraryItemInclude<ExtArgs> | null
    /**
     * Filter, which ItineraryItem to fetch.
     */
    where: ItineraryItemWhereUniqueInput
  }

  /**
   * ItineraryItem findFirst
   */
  export type ItineraryItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItineraryItem
     */
    select?: ItineraryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItineraryItem
     */
    omit?: ItineraryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItineraryItemInclude<ExtArgs> | null
    /**
     * Filter, which ItineraryItem to fetch.
     */
    where?: ItineraryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItineraryItems to fetch.
     */
    orderBy?: ItineraryItemOrderByWithRelationInput | ItineraryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItineraryItems.
     */
    cursor?: ItineraryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItineraryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItineraryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItineraryItems.
     */
    distinct?: ItineraryItemScalarFieldEnum | ItineraryItemScalarFieldEnum[]
  }

  /**
   * ItineraryItem findFirstOrThrow
   */
  export type ItineraryItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItineraryItem
     */
    select?: ItineraryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItineraryItem
     */
    omit?: ItineraryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItineraryItemInclude<ExtArgs> | null
    /**
     * Filter, which ItineraryItem to fetch.
     */
    where?: ItineraryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItineraryItems to fetch.
     */
    orderBy?: ItineraryItemOrderByWithRelationInput | ItineraryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItineraryItems.
     */
    cursor?: ItineraryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItineraryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItineraryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItineraryItems.
     */
    distinct?: ItineraryItemScalarFieldEnum | ItineraryItemScalarFieldEnum[]
  }

  /**
   * ItineraryItem findMany
   */
  export type ItineraryItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItineraryItem
     */
    select?: ItineraryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItineraryItem
     */
    omit?: ItineraryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItineraryItemInclude<ExtArgs> | null
    /**
     * Filter, which ItineraryItems to fetch.
     */
    where?: ItineraryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItineraryItems to fetch.
     */
    orderBy?: ItineraryItemOrderByWithRelationInput | ItineraryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItineraryItems.
     */
    cursor?: ItineraryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItineraryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItineraryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItineraryItems.
     */
    distinct?: ItineraryItemScalarFieldEnum | ItineraryItemScalarFieldEnum[]
  }

  /**
   * ItineraryItem create
   */
  export type ItineraryItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItineraryItem
     */
    select?: ItineraryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItineraryItem
     */
    omit?: ItineraryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItineraryItemInclude<ExtArgs> | null
    /**
     * The data needed to create a ItineraryItem.
     */
    data: XOR<ItineraryItemCreateInput, ItineraryItemUncheckedCreateInput>
  }

  /**
   * ItineraryItem createMany
   */
  export type ItineraryItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItineraryItems.
     */
    data: ItineraryItemCreateManyInput | ItineraryItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItineraryItem createManyAndReturn
   */
  export type ItineraryItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItineraryItem
     */
    select?: ItineraryItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItineraryItem
     */
    omit?: ItineraryItemOmit<ExtArgs> | null
    /**
     * The data used to create many ItineraryItems.
     */
    data: ItineraryItemCreateManyInput | ItineraryItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItineraryItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItineraryItem update
   */
  export type ItineraryItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItineraryItem
     */
    select?: ItineraryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItineraryItem
     */
    omit?: ItineraryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItineraryItemInclude<ExtArgs> | null
    /**
     * The data needed to update a ItineraryItem.
     */
    data: XOR<ItineraryItemUpdateInput, ItineraryItemUncheckedUpdateInput>
    /**
     * Choose, which ItineraryItem to update.
     */
    where: ItineraryItemWhereUniqueInput
  }

  /**
   * ItineraryItem updateMany
   */
  export type ItineraryItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItineraryItems.
     */
    data: XOR<ItineraryItemUpdateManyMutationInput, ItineraryItemUncheckedUpdateManyInput>
    /**
     * Filter which ItineraryItems to update
     */
    where?: ItineraryItemWhereInput
    /**
     * Limit how many ItineraryItems to update.
     */
    limit?: number
  }

  /**
   * ItineraryItem updateManyAndReturn
   */
  export type ItineraryItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItineraryItem
     */
    select?: ItineraryItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItineraryItem
     */
    omit?: ItineraryItemOmit<ExtArgs> | null
    /**
     * The data used to update ItineraryItems.
     */
    data: XOR<ItineraryItemUpdateManyMutationInput, ItineraryItemUncheckedUpdateManyInput>
    /**
     * Filter which ItineraryItems to update
     */
    where?: ItineraryItemWhereInput
    /**
     * Limit how many ItineraryItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItineraryItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItineraryItem upsert
   */
  export type ItineraryItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItineraryItem
     */
    select?: ItineraryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItineraryItem
     */
    omit?: ItineraryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItineraryItemInclude<ExtArgs> | null
    /**
     * The filter to search for the ItineraryItem to update in case it exists.
     */
    where: ItineraryItemWhereUniqueInput
    /**
     * In case the ItineraryItem found by the `where` argument doesn't exist, create a new ItineraryItem with this data.
     */
    create: XOR<ItineraryItemCreateInput, ItineraryItemUncheckedCreateInput>
    /**
     * In case the ItineraryItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItineraryItemUpdateInput, ItineraryItemUncheckedUpdateInput>
  }

  /**
   * ItineraryItem delete
   */
  export type ItineraryItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItineraryItem
     */
    select?: ItineraryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItineraryItem
     */
    omit?: ItineraryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItineraryItemInclude<ExtArgs> | null
    /**
     * Filter which ItineraryItem to delete.
     */
    where: ItineraryItemWhereUniqueInput
  }

  /**
   * ItineraryItem deleteMany
   */
  export type ItineraryItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItineraryItems to delete
     */
    where?: ItineraryItemWhereInput
    /**
     * Limit how many ItineraryItems to delete.
     */
    limit?: number
  }

  /**
   * ItineraryItem without action
   */
  export type ItineraryItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItineraryItem
     */
    select?: ItineraryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItineraryItem
     */
    omit?: ItineraryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItineraryItemInclude<ExtArgs> | null
  }


  /**
   * Model TripInvitation
   */

  export type AggregateTripInvitation = {
    _count: TripInvitationCountAggregateOutputType | null
    _min: TripInvitationMinAggregateOutputType | null
    _max: TripInvitationMaxAggregateOutputType | null
  }

  export type TripInvitationMinAggregateOutputType = {
    id: string | null
    tripId: string | null
    inviterId: string | null
    inviteeUserId: string | null
    inviteeEmail: string | null
    message: string | null
    status: $Enums.InvitationStatus | null
    expiresAt: Date | null
    respondedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TripInvitationMaxAggregateOutputType = {
    id: string | null
    tripId: string | null
    inviterId: string | null
    inviteeUserId: string | null
    inviteeEmail: string | null
    message: string | null
    status: $Enums.InvitationStatus | null
    expiresAt: Date | null
    respondedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TripInvitationCountAggregateOutputType = {
    id: number
    tripId: number
    inviterId: number
    inviteeUserId: number
    inviteeEmail: number
    message: number
    status: number
    expiresAt: number
    respondedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TripInvitationMinAggregateInputType = {
    id?: true
    tripId?: true
    inviterId?: true
    inviteeUserId?: true
    inviteeEmail?: true
    message?: true
    status?: true
    expiresAt?: true
    respondedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TripInvitationMaxAggregateInputType = {
    id?: true
    tripId?: true
    inviterId?: true
    inviteeUserId?: true
    inviteeEmail?: true
    message?: true
    status?: true
    expiresAt?: true
    respondedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TripInvitationCountAggregateInputType = {
    id?: true
    tripId?: true
    inviterId?: true
    inviteeUserId?: true
    inviteeEmail?: true
    message?: true
    status?: true
    expiresAt?: true
    respondedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TripInvitationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripInvitation to aggregate.
     */
    where?: TripInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripInvitations to fetch.
     */
    orderBy?: TripInvitationOrderByWithRelationInput | TripInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripInvitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TripInvitations
    **/
    _count?: true | TripInvitationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripInvitationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripInvitationMaxAggregateInputType
  }

  export type GetTripInvitationAggregateType<T extends TripInvitationAggregateArgs> = {
        [P in keyof T & keyof AggregateTripInvitation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTripInvitation[P]>
      : GetScalarType<T[P], AggregateTripInvitation[P]>
  }




  export type TripInvitationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripInvitationWhereInput
    orderBy?: TripInvitationOrderByWithAggregationInput | TripInvitationOrderByWithAggregationInput[]
    by: TripInvitationScalarFieldEnum[] | TripInvitationScalarFieldEnum
    having?: TripInvitationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripInvitationCountAggregateInputType | true
    _min?: TripInvitationMinAggregateInputType
    _max?: TripInvitationMaxAggregateInputType
  }

  export type TripInvitationGroupByOutputType = {
    id: string
    tripId: string
    inviterId: string
    inviteeUserId: string | null
    inviteeEmail: string | null
    message: string | null
    status: $Enums.InvitationStatus
    expiresAt: Date | null
    respondedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: TripInvitationCountAggregateOutputType | null
    _min: TripInvitationMinAggregateOutputType | null
    _max: TripInvitationMaxAggregateOutputType | null
  }

  type GetTripInvitationGroupByPayload<T extends TripInvitationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripInvitationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripInvitationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripInvitationGroupByOutputType[P]>
            : GetScalarType<T[P], TripInvitationGroupByOutputType[P]>
        }
      >
    >


  export type TripInvitationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    inviterId?: boolean
    inviteeUserId?: boolean
    inviteeEmail?: boolean
    message?: boolean
    status?: boolean
    expiresAt?: boolean
    respondedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
    inviter?: boolean | UserDefaultArgs<ExtArgs>
    invitee?: boolean | TripInvitation$inviteeArgs<ExtArgs>
  }, ExtArgs["result"]["tripInvitation"]>

  export type TripInvitationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    inviterId?: boolean
    inviteeUserId?: boolean
    inviteeEmail?: boolean
    message?: boolean
    status?: boolean
    expiresAt?: boolean
    respondedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
    inviter?: boolean | UserDefaultArgs<ExtArgs>
    invitee?: boolean | TripInvitation$inviteeArgs<ExtArgs>
  }, ExtArgs["result"]["tripInvitation"]>

  export type TripInvitationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    inviterId?: boolean
    inviteeUserId?: boolean
    inviteeEmail?: boolean
    message?: boolean
    status?: boolean
    expiresAt?: boolean
    respondedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
    inviter?: boolean | UserDefaultArgs<ExtArgs>
    invitee?: boolean | TripInvitation$inviteeArgs<ExtArgs>
  }, ExtArgs["result"]["tripInvitation"]>

  export type TripInvitationSelectScalar = {
    id?: boolean
    tripId?: boolean
    inviterId?: boolean
    inviteeUserId?: boolean
    inviteeEmail?: boolean
    message?: boolean
    status?: boolean
    expiresAt?: boolean
    respondedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TripInvitationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tripId" | "inviterId" | "inviteeUserId" | "inviteeEmail" | "message" | "status" | "expiresAt" | "respondedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["tripInvitation"]>
  export type TripInvitationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
    inviter?: boolean | UserDefaultArgs<ExtArgs>
    invitee?: boolean | TripInvitation$inviteeArgs<ExtArgs>
  }
  export type TripInvitationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
    inviter?: boolean | UserDefaultArgs<ExtArgs>
    invitee?: boolean | TripInvitation$inviteeArgs<ExtArgs>
  }
  export type TripInvitationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
    inviter?: boolean | UserDefaultArgs<ExtArgs>
    invitee?: boolean | TripInvitation$inviteeArgs<ExtArgs>
  }

  export type $TripInvitationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TripInvitation"
    objects: {
      trip: Prisma.$TripPayload<ExtArgs>
      inviter: Prisma.$UserPayload<ExtArgs>
      invitee: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tripId: string
      inviterId: string
      inviteeUserId: string | null
      inviteeEmail: string | null
      message: string | null
      status: $Enums.InvitationStatus
      expiresAt: Date | null
      respondedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tripInvitation"]>
    composites: {}
  }

  type TripInvitationGetPayload<S extends boolean | null | undefined | TripInvitationDefaultArgs> = $Result.GetResult<Prisma.$TripInvitationPayload, S>

  type TripInvitationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TripInvitationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripInvitationCountAggregateInputType | true
    }

  export interface TripInvitationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TripInvitation'], meta: { name: 'TripInvitation' } }
    /**
     * Find zero or one TripInvitation that matches the filter.
     * @param {TripInvitationFindUniqueArgs} args - Arguments to find a TripInvitation
     * @example
     * // Get one TripInvitation
     * const tripInvitation = await prisma.tripInvitation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripInvitationFindUniqueArgs>(args: SelectSubset<T, TripInvitationFindUniqueArgs<ExtArgs>>): Prisma__TripInvitationClient<$Result.GetResult<Prisma.$TripInvitationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TripInvitation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TripInvitationFindUniqueOrThrowArgs} args - Arguments to find a TripInvitation
     * @example
     * // Get one TripInvitation
     * const tripInvitation = await prisma.tripInvitation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripInvitationFindUniqueOrThrowArgs>(args: SelectSubset<T, TripInvitationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripInvitationClient<$Result.GetResult<Prisma.$TripInvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripInvitation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripInvitationFindFirstArgs} args - Arguments to find a TripInvitation
     * @example
     * // Get one TripInvitation
     * const tripInvitation = await prisma.tripInvitation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripInvitationFindFirstArgs>(args?: SelectSubset<T, TripInvitationFindFirstArgs<ExtArgs>>): Prisma__TripInvitationClient<$Result.GetResult<Prisma.$TripInvitationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripInvitation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripInvitationFindFirstOrThrowArgs} args - Arguments to find a TripInvitation
     * @example
     * // Get one TripInvitation
     * const tripInvitation = await prisma.tripInvitation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripInvitationFindFirstOrThrowArgs>(args?: SelectSubset<T, TripInvitationFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripInvitationClient<$Result.GetResult<Prisma.$TripInvitationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TripInvitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripInvitationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TripInvitations
     * const tripInvitations = await prisma.tripInvitation.findMany()
     * 
     * // Get first 10 TripInvitations
     * const tripInvitations = await prisma.tripInvitation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripInvitationWithIdOnly = await prisma.tripInvitation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TripInvitationFindManyArgs>(args?: SelectSubset<T, TripInvitationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripInvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TripInvitation.
     * @param {TripInvitationCreateArgs} args - Arguments to create a TripInvitation.
     * @example
     * // Create one TripInvitation
     * const TripInvitation = await prisma.tripInvitation.create({
     *   data: {
     *     // ... data to create a TripInvitation
     *   }
     * })
     * 
     */
    create<T extends TripInvitationCreateArgs>(args: SelectSubset<T, TripInvitationCreateArgs<ExtArgs>>): Prisma__TripInvitationClient<$Result.GetResult<Prisma.$TripInvitationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TripInvitations.
     * @param {TripInvitationCreateManyArgs} args - Arguments to create many TripInvitations.
     * @example
     * // Create many TripInvitations
     * const tripInvitation = await prisma.tripInvitation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripInvitationCreateManyArgs>(args?: SelectSubset<T, TripInvitationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TripInvitations and returns the data saved in the database.
     * @param {TripInvitationCreateManyAndReturnArgs} args - Arguments to create many TripInvitations.
     * @example
     * // Create many TripInvitations
     * const tripInvitation = await prisma.tripInvitation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TripInvitations and only return the `id`
     * const tripInvitationWithIdOnly = await prisma.tripInvitation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TripInvitationCreateManyAndReturnArgs>(args?: SelectSubset<T, TripInvitationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripInvitationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TripInvitation.
     * @param {TripInvitationDeleteArgs} args - Arguments to delete one TripInvitation.
     * @example
     * // Delete one TripInvitation
     * const TripInvitation = await prisma.tripInvitation.delete({
     *   where: {
     *     // ... filter to delete one TripInvitation
     *   }
     * })
     * 
     */
    delete<T extends TripInvitationDeleteArgs>(args: SelectSubset<T, TripInvitationDeleteArgs<ExtArgs>>): Prisma__TripInvitationClient<$Result.GetResult<Prisma.$TripInvitationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TripInvitation.
     * @param {TripInvitationUpdateArgs} args - Arguments to update one TripInvitation.
     * @example
     * // Update one TripInvitation
     * const tripInvitation = await prisma.tripInvitation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripInvitationUpdateArgs>(args: SelectSubset<T, TripInvitationUpdateArgs<ExtArgs>>): Prisma__TripInvitationClient<$Result.GetResult<Prisma.$TripInvitationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TripInvitations.
     * @param {TripInvitationDeleteManyArgs} args - Arguments to filter TripInvitations to delete.
     * @example
     * // Delete a few TripInvitations
     * const { count } = await prisma.tripInvitation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripInvitationDeleteManyArgs>(args?: SelectSubset<T, TripInvitationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripInvitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripInvitationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TripInvitations
     * const tripInvitation = await prisma.tripInvitation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripInvitationUpdateManyArgs>(args: SelectSubset<T, TripInvitationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripInvitations and returns the data updated in the database.
     * @param {TripInvitationUpdateManyAndReturnArgs} args - Arguments to update many TripInvitations.
     * @example
     * // Update many TripInvitations
     * const tripInvitation = await prisma.tripInvitation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TripInvitations and only return the `id`
     * const tripInvitationWithIdOnly = await prisma.tripInvitation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TripInvitationUpdateManyAndReturnArgs>(args: SelectSubset<T, TripInvitationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripInvitationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TripInvitation.
     * @param {TripInvitationUpsertArgs} args - Arguments to update or create a TripInvitation.
     * @example
     * // Update or create a TripInvitation
     * const tripInvitation = await prisma.tripInvitation.upsert({
     *   create: {
     *     // ... data to create a TripInvitation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TripInvitation we want to update
     *   }
     * })
     */
    upsert<T extends TripInvitationUpsertArgs>(args: SelectSubset<T, TripInvitationUpsertArgs<ExtArgs>>): Prisma__TripInvitationClient<$Result.GetResult<Prisma.$TripInvitationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TripInvitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripInvitationCountArgs} args - Arguments to filter TripInvitations to count.
     * @example
     * // Count the number of TripInvitations
     * const count = await prisma.tripInvitation.count({
     *   where: {
     *     // ... the filter for the TripInvitations we want to count
     *   }
     * })
    **/
    count<T extends TripInvitationCountArgs>(
      args?: Subset<T, TripInvitationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripInvitationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TripInvitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripInvitationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TripInvitationAggregateArgs>(args: Subset<T, TripInvitationAggregateArgs>): Prisma.PrismaPromise<GetTripInvitationAggregateType<T>>

    /**
     * Group by TripInvitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripInvitationGroupByArgs} args - Group by arguments.
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
      T extends TripInvitationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripInvitationGroupByArgs['orderBy'] }
        : { orderBy?: TripInvitationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TripInvitationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripInvitationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TripInvitation model
   */
  readonly fields: TripInvitationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TripInvitation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripInvitationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    inviter<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    invitee<T extends TripInvitation$inviteeArgs<ExtArgs> = {}>(args?: Subset<T, TripInvitation$inviteeArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TripInvitation model
   */
  interface TripInvitationFieldRefs {
    readonly id: FieldRef<"TripInvitation", 'String'>
    readonly tripId: FieldRef<"TripInvitation", 'String'>
    readonly inviterId: FieldRef<"TripInvitation", 'String'>
    readonly inviteeUserId: FieldRef<"TripInvitation", 'String'>
    readonly inviteeEmail: FieldRef<"TripInvitation", 'String'>
    readonly message: FieldRef<"TripInvitation", 'String'>
    readonly status: FieldRef<"TripInvitation", 'InvitationStatus'>
    readonly expiresAt: FieldRef<"TripInvitation", 'DateTime'>
    readonly respondedAt: FieldRef<"TripInvitation", 'DateTime'>
    readonly createdAt: FieldRef<"TripInvitation", 'DateTime'>
    readonly updatedAt: FieldRef<"TripInvitation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TripInvitation findUnique
   */
  export type TripInvitationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripInvitation
     */
    select?: TripInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripInvitation
     */
    omit?: TripInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInvitationInclude<ExtArgs> | null
    /**
     * Filter, which TripInvitation to fetch.
     */
    where: TripInvitationWhereUniqueInput
  }

  /**
   * TripInvitation findUniqueOrThrow
   */
  export type TripInvitationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripInvitation
     */
    select?: TripInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripInvitation
     */
    omit?: TripInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInvitationInclude<ExtArgs> | null
    /**
     * Filter, which TripInvitation to fetch.
     */
    where: TripInvitationWhereUniqueInput
  }

  /**
   * TripInvitation findFirst
   */
  export type TripInvitationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripInvitation
     */
    select?: TripInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripInvitation
     */
    omit?: TripInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInvitationInclude<ExtArgs> | null
    /**
     * Filter, which TripInvitation to fetch.
     */
    where?: TripInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripInvitations to fetch.
     */
    orderBy?: TripInvitationOrderByWithRelationInput | TripInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripInvitations.
     */
    cursor?: TripInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripInvitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripInvitations.
     */
    distinct?: TripInvitationScalarFieldEnum | TripInvitationScalarFieldEnum[]
  }

  /**
   * TripInvitation findFirstOrThrow
   */
  export type TripInvitationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripInvitation
     */
    select?: TripInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripInvitation
     */
    omit?: TripInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInvitationInclude<ExtArgs> | null
    /**
     * Filter, which TripInvitation to fetch.
     */
    where?: TripInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripInvitations to fetch.
     */
    orderBy?: TripInvitationOrderByWithRelationInput | TripInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripInvitations.
     */
    cursor?: TripInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripInvitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripInvitations.
     */
    distinct?: TripInvitationScalarFieldEnum | TripInvitationScalarFieldEnum[]
  }

  /**
   * TripInvitation findMany
   */
  export type TripInvitationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripInvitation
     */
    select?: TripInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripInvitation
     */
    omit?: TripInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInvitationInclude<ExtArgs> | null
    /**
     * Filter, which TripInvitations to fetch.
     */
    where?: TripInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripInvitations to fetch.
     */
    orderBy?: TripInvitationOrderByWithRelationInput | TripInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TripInvitations.
     */
    cursor?: TripInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripInvitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripInvitations.
     */
    distinct?: TripInvitationScalarFieldEnum | TripInvitationScalarFieldEnum[]
  }

  /**
   * TripInvitation create
   */
  export type TripInvitationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripInvitation
     */
    select?: TripInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripInvitation
     */
    omit?: TripInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInvitationInclude<ExtArgs> | null
    /**
     * The data needed to create a TripInvitation.
     */
    data: XOR<TripInvitationCreateInput, TripInvitationUncheckedCreateInput>
  }

  /**
   * TripInvitation createMany
   */
  export type TripInvitationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TripInvitations.
     */
    data: TripInvitationCreateManyInput | TripInvitationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TripInvitation createManyAndReturn
   */
  export type TripInvitationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripInvitation
     */
    select?: TripInvitationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripInvitation
     */
    omit?: TripInvitationOmit<ExtArgs> | null
    /**
     * The data used to create many TripInvitations.
     */
    data: TripInvitationCreateManyInput | TripInvitationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInvitationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripInvitation update
   */
  export type TripInvitationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripInvitation
     */
    select?: TripInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripInvitation
     */
    omit?: TripInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInvitationInclude<ExtArgs> | null
    /**
     * The data needed to update a TripInvitation.
     */
    data: XOR<TripInvitationUpdateInput, TripInvitationUncheckedUpdateInput>
    /**
     * Choose, which TripInvitation to update.
     */
    where: TripInvitationWhereUniqueInput
  }

  /**
   * TripInvitation updateMany
   */
  export type TripInvitationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TripInvitations.
     */
    data: XOR<TripInvitationUpdateManyMutationInput, TripInvitationUncheckedUpdateManyInput>
    /**
     * Filter which TripInvitations to update
     */
    where?: TripInvitationWhereInput
    /**
     * Limit how many TripInvitations to update.
     */
    limit?: number
  }

  /**
   * TripInvitation updateManyAndReturn
   */
  export type TripInvitationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripInvitation
     */
    select?: TripInvitationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripInvitation
     */
    omit?: TripInvitationOmit<ExtArgs> | null
    /**
     * The data used to update TripInvitations.
     */
    data: XOR<TripInvitationUpdateManyMutationInput, TripInvitationUncheckedUpdateManyInput>
    /**
     * Filter which TripInvitations to update
     */
    where?: TripInvitationWhereInput
    /**
     * Limit how many TripInvitations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInvitationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripInvitation upsert
   */
  export type TripInvitationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripInvitation
     */
    select?: TripInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripInvitation
     */
    omit?: TripInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInvitationInclude<ExtArgs> | null
    /**
     * The filter to search for the TripInvitation to update in case it exists.
     */
    where: TripInvitationWhereUniqueInput
    /**
     * In case the TripInvitation found by the `where` argument doesn't exist, create a new TripInvitation with this data.
     */
    create: XOR<TripInvitationCreateInput, TripInvitationUncheckedCreateInput>
    /**
     * In case the TripInvitation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripInvitationUpdateInput, TripInvitationUncheckedUpdateInput>
  }

  /**
   * TripInvitation delete
   */
  export type TripInvitationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripInvitation
     */
    select?: TripInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripInvitation
     */
    omit?: TripInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInvitationInclude<ExtArgs> | null
    /**
     * Filter which TripInvitation to delete.
     */
    where: TripInvitationWhereUniqueInput
  }

  /**
   * TripInvitation deleteMany
   */
  export type TripInvitationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripInvitations to delete
     */
    where?: TripInvitationWhereInput
    /**
     * Limit how many TripInvitations to delete.
     */
    limit?: number
  }

  /**
   * TripInvitation.invitee
   */
  export type TripInvitation$inviteeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * TripInvitation without action
   */
  export type TripInvitationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripInvitation
     */
    select?: TripInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripInvitation
     */
    omit?: TripInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInvitationInclude<ExtArgs> | null
  }


  /**
   * Model Rating
   */

  export type AggregateRating = {
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  export type RatingAvgAggregateOutputType = {
    score: number | null
  }

  export type RatingSumAggregateOutputType = {
    score: number | null
  }

  export type RatingMinAggregateOutputType = {
    id: string | null
    userId: string | null
    tripId: string | null
    score: number | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RatingMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    tripId: string | null
    score: number | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RatingCountAggregateOutputType = {
    id: number
    userId: number
    tripId: number
    score: number
    comment: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RatingAvgAggregateInputType = {
    score?: true
  }

  export type RatingSumAggregateInputType = {
    score?: true
  }

  export type RatingMinAggregateInputType = {
    id?: true
    userId?: true
    tripId?: true
    score?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RatingMaxAggregateInputType = {
    id?: true
    userId?: true
    tripId?: true
    score?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RatingCountAggregateInputType = {
    id?: true
    userId?: true
    tripId?: true
    score?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RatingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rating to aggregate.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ratings
    **/
    _count?: true | RatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RatingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RatingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RatingMaxAggregateInputType
  }

  export type GetRatingAggregateType<T extends RatingAggregateArgs> = {
        [P in keyof T & keyof AggregateRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRating[P]>
      : GetScalarType<T[P], AggregateRating[P]>
  }




  export type RatingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithAggregationInput | RatingOrderByWithAggregationInput[]
    by: RatingScalarFieldEnum[] | RatingScalarFieldEnum
    having?: RatingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RatingCountAggregateInputType | true
    _avg?: RatingAvgAggregateInputType
    _sum?: RatingSumAggregateInputType
    _min?: RatingMinAggregateInputType
    _max?: RatingMaxAggregateInputType
  }

  export type RatingGroupByOutputType = {
    id: string
    userId: string
    tripId: string
    score: number
    comment: string | null
    createdAt: Date
    updatedAt: Date
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  type GetRatingGroupByPayload<T extends RatingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RatingGroupByOutputType[P]>
            : GetScalarType<T[P], RatingGroupByOutputType[P]>
        }
      >
    >


  export type RatingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tripId?: boolean
    score?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tripId?: boolean
    score?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tripId?: boolean
    score?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectScalar = {
    id?: boolean
    userId?: boolean
    tripId?: boolean
    score?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RatingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "tripId" | "score" | "comment" | "createdAt" | "updatedAt", ExtArgs["result"]["rating"]>
  export type RatingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type RatingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type RatingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }

  export type $RatingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rating"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      trip: Prisma.$TripPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      tripId: string
      score: number
      comment: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rating"]>
    composites: {}
  }

  type RatingGetPayload<S extends boolean | null | undefined | RatingDefaultArgs> = $Result.GetResult<Prisma.$RatingPayload, S>

  type RatingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RatingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RatingCountAggregateInputType | true
    }

  export interface RatingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rating'], meta: { name: 'Rating' } }
    /**
     * Find zero or one Rating that matches the filter.
     * @param {RatingFindUniqueArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RatingFindUniqueArgs>(args: SelectSubset<T, RatingFindUniqueArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rating that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RatingFindUniqueOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RatingFindUniqueOrThrowArgs>(args: SelectSubset<T, RatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RatingFindFirstArgs>(args?: SelectSubset<T, RatingFindFirstArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RatingFindFirstOrThrowArgs>(args?: SelectSubset<T, RatingFindFirstOrThrowArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ratings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ratings
     * const ratings = await prisma.rating.findMany()
     * 
     * // Get first 10 Ratings
     * const ratings = await prisma.rating.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ratingWithIdOnly = await prisma.rating.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RatingFindManyArgs>(args?: SelectSubset<T, RatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rating.
     * @param {RatingCreateArgs} args - Arguments to create a Rating.
     * @example
     * // Create one Rating
     * const Rating = await prisma.rating.create({
     *   data: {
     *     // ... data to create a Rating
     *   }
     * })
     * 
     */
    create<T extends RatingCreateArgs>(args: SelectSubset<T, RatingCreateArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ratings.
     * @param {RatingCreateManyArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const rating = await prisma.rating.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RatingCreateManyArgs>(args?: SelectSubset<T, RatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ratings and returns the data saved in the database.
     * @param {RatingCreateManyAndReturnArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const rating = await prisma.rating.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ratings and only return the `id`
     * const ratingWithIdOnly = await prisma.rating.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RatingCreateManyAndReturnArgs>(args?: SelectSubset<T, RatingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rating.
     * @param {RatingDeleteArgs} args - Arguments to delete one Rating.
     * @example
     * // Delete one Rating
     * const Rating = await prisma.rating.delete({
     *   where: {
     *     // ... filter to delete one Rating
     *   }
     * })
     * 
     */
    delete<T extends RatingDeleteArgs>(args: SelectSubset<T, RatingDeleteArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rating.
     * @param {RatingUpdateArgs} args - Arguments to update one Rating.
     * @example
     * // Update one Rating
     * const rating = await prisma.rating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RatingUpdateArgs>(args: SelectSubset<T, RatingUpdateArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ratings.
     * @param {RatingDeleteManyArgs} args - Arguments to filter Ratings to delete.
     * @example
     * // Delete a few Ratings
     * const { count } = await prisma.rating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RatingDeleteManyArgs>(args?: SelectSubset<T, RatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ratings
     * const rating = await prisma.rating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RatingUpdateManyArgs>(args: SelectSubset<T, RatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings and returns the data updated in the database.
     * @param {RatingUpdateManyAndReturnArgs} args - Arguments to update many Ratings.
     * @example
     * // Update many Ratings
     * const rating = await prisma.rating.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ratings and only return the `id`
     * const ratingWithIdOnly = await prisma.rating.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RatingUpdateManyAndReturnArgs>(args: SelectSubset<T, RatingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rating.
     * @param {RatingUpsertArgs} args - Arguments to update or create a Rating.
     * @example
     * // Update or create a Rating
     * const rating = await prisma.rating.upsert({
     *   create: {
     *     // ... data to create a Rating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rating we want to update
     *   }
     * })
     */
    upsert<T extends RatingUpsertArgs>(args: SelectSubset<T, RatingUpsertArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingCountArgs} args - Arguments to filter Ratings to count.
     * @example
     * // Count the number of Ratings
     * const count = await prisma.rating.count({
     *   where: {
     *     // ... the filter for the Ratings we want to count
     *   }
     * })
    **/
    count<T extends RatingCountArgs>(
      args?: Subset<T, RatingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RatingAggregateArgs>(args: Subset<T, RatingAggregateArgs>): Prisma.PrismaPromise<GetRatingAggregateType<T>>

    /**
     * Group by Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingGroupByArgs} args - Group by arguments.
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
      T extends RatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RatingGroupByArgs['orderBy'] }
        : { orderBy?: RatingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, RatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rating model
   */
  readonly fields: RatingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RatingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Rating model
   */
  interface RatingFieldRefs {
    readonly id: FieldRef<"Rating", 'String'>
    readonly userId: FieldRef<"Rating", 'String'>
    readonly tripId: FieldRef<"Rating", 'String'>
    readonly score: FieldRef<"Rating", 'Int'>
    readonly comment: FieldRef<"Rating", 'String'>
    readonly createdAt: FieldRef<"Rating", 'DateTime'>
    readonly updatedAt: FieldRef<"Rating", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Rating findUnique
   */
  export type RatingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating findUniqueOrThrow
   */
  export type RatingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating findFirst
   */
  export type RatingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating findFirstOrThrow
   */
  export type RatingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating findMany
   */
  export type RatingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Ratings to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating create
   */
  export type RatingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The data needed to create a Rating.
     */
    data: XOR<RatingCreateInput, RatingUncheckedCreateInput>
  }

  /**
   * Rating createMany
   */
  export type RatingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ratings.
     */
    data: RatingCreateManyInput | RatingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rating createManyAndReturn
   */
  export type RatingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * The data used to create many Ratings.
     */
    data: RatingCreateManyInput | RatingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rating update
   */
  export type RatingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The data needed to update a Rating.
     */
    data: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
    /**
     * Choose, which Rating to update.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating updateMany
   */
  export type RatingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ratings.
     */
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyInput>
    /**
     * Filter which Ratings to update
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to update.
     */
    limit?: number
  }

  /**
   * Rating updateManyAndReturn
   */
  export type RatingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * The data used to update Ratings.
     */
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyInput>
    /**
     * Filter which Ratings to update
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rating upsert
   */
  export type RatingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The filter to search for the Rating to update in case it exists.
     */
    where: RatingWhereUniqueInput
    /**
     * In case the Rating found by the `where` argument doesn't exist, create a new Rating with this data.
     */
    create: XOR<RatingCreateInput, RatingUncheckedCreateInput>
    /**
     * In case the Rating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
  }

  /**
   * Rating delete
   */
  export type RatingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter which Rating to delete.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating deleteMany
   */
  export type RatingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ratings to delete
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to delete.
     */
    limit?: number
  }

  /**
   * Rating without action
   */
  export type RatingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    supabaseAuthId: 'supabaseAuthId',
    provider: 'provider',
    providerSubject: 'providerSubject',
    email: 'email',
    fullName: 'fullName',
    avatarUrl: 'avatarUrl',
    username: 'username',
    bio: 'bio',
    country: 'country',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TripScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    title: 'title',
    description: 'description',
    destination: 'destination',
    destinationCountry: 'destinationCountry',
    destinationCity: 'destinationCity',
    budgetTotal: 'budgetTotal',
    travelerCount: 'travelerCount',
    startDate: 'startDate',
    endDate: 'endDate',
    timezone: 'timezone',
    coverImageUrl: 'coverImageUrl',
    status: 'status',
    endedAt: 'endedAt',
    endedByUserId: 'endedByUserId',
    isTemplatePublished: 'isTemplatePublished',
    templatePublishedAt: 'templatePublishedAt',
    templateUseCount: 'templateUseCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TripScalarFieldEnum = (typeof TripScalarFieldEnum)[keyof typeof TripScalarFieldEnum]


  export const TripMemberScalarFieldEnum: {
    id: 'id',
    tripId: 'tripId',
    userId: 'userId',
    role: 'role',
    joinedAt: 'joinedAt',
    addedByUserId: 'addedByUserId'
  };

  export type TripMemberScalarFieldEnum = (typeof TripMemberScalarFieldEnum)[keyof typeof TripMemberScalarFieldEnum]


  export const TripDayScalarFieldEnum: {
    id: 'id',
    tripId: 'tripId',
    dayNumber: 'dayNumber',
    date: 'date',
    title: 'title',
    note: 'note',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TripDayScalarFieldEnum = (typeof TripDayScalarFieldEnum)[keyof typeof TripDayScalarFieldEnum]


  export const ItineraryItemScalarFieldEnum: {
    id: 'id',
    tripDayId: 'tripDayId',
    title: 'title',
    description: 'description',
    placeName: 'placeName',
    placeAddress: 'placeAddress',
    country: 'country',
    city: 'city',
    latitude: 'latitude',
    longitude: 'longitude',
    startTime: 'startTime',
    endTime: 'endTime',
    estimatedCost: 'estimatedCost',
    currency: 'currency',
    note: 'note',
    sortOrder: 'sortOrder',
    createdByUserId: 'createdByUserId',
    isCompleted: 'isCompleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ItineraryItemScalarFieldEnum = (typeof ItineraryItemScalarFieldEnum)[keyof typeof ItineraryItemScalarFieldEnum]


  export const TripInvitationScalarFieldEnum: {
    id: 'id',
    tripId: 'tripId',
    inviterId: 'inviterId',
    inviteeUserId: 'inviteeUserId',
    inviteeEmail: 'inviteeEmail',
    message: 'message',
    status: 'status',
    expiresAt: 'expiresAt',
    respondedAt: 'respondedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TripInvitationScalarFieldEnum = (typeof TripInvitationScalarFieldEnum)[keyof typeof TripInvitationScalarFieldEnum]


  export const RatingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tripId: 'tripId',
    score: 'score',
    comment: 'comment',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RatingScalarFieldEnum = (typeof RatingScalarFieldEnum)[keyof typeof RatingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'AuthProvider'
   */
  export type EnumAuthProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthProvider'>
    


  /**
   * Reference to a field of type 'AuthProvider[]'
   */
  export type ListEnumAuthProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthProvider[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'TripStatus'
   */
  export type EnumTripStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TripStatus'>
    


  /**
   * Reference to a field of type 'TripStatus[]'
   */
  export type ListEnumTripStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TripStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TripMemberRole'
   */
  export type EnumTripMemberRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TripMemberRole'>
    


  /**
   * Reference to a field of type 'TripMemberRole[]'
   */
  export type ListEnumTripMemberRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TripMemberRole[]'>
    


  /**
   * Reference to a field of type 'InvitationStatus'
   */
  export type EnumInvitationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvitationStatus'>
    


  /**
   * Reference to a field of type 'InvitationStatus[]'
   */
  export type ListEnumInvitationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvitationStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    supabaseAuthId?: StringFilter<"User"> | string
    provider?: EnumAuthProviderFilter<"User"> | $Enums.AuthProvider
    providerSubject?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    ownedTrips?: TripListRelationFilter
    tripMembers?: TripMemberListRelationFilter
    invitationsSent?: TripInvitationListRelationFilter
    invitationsRecv?: TripInvitationListRelationFilter
    ratings?: RatingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    supabaseAuthId?: SortOrder
    provider?: SortOrder
    providerSubject?: SortOrderInput | SortOrder
    email?: SortOrder
    fullName?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownedTrips?: TripOrderByRelationAggregateInput
    tripMembers?: TripMemberOrderByRelationAggregateInput
    invitationsSent?: TripInvitationOrderByRelationAggregateInput
    invitationsRecv?: TripInvitationOrderByRelationAggregateInput
    ratings?: RatingOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    supabaseAuthId?: string
    providerSubject?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    provider?: EnumAuthProviderFilter<"User"> | $Enums.AuthProvider
    fullName?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    ownedTrips?: TripListRelationFilter
    tripMembers?: TripMemberListRelationFilter
    invitationsSent?: TripInvitationListRelationFilter
    invitationsRecv?: TripInvitationListRelationFilter
    ratings?: RatingListRelationFilter
  }, "id" | "supabaseAuthId" | "providerSubject" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    supabaseAuthId?: SortOrder
    provider?: SortOrder
    providerSubject?: SortOrderInput | SortOrder
    email?: SortOrder
    fullName?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    supabaseAuthId?: StringWithAggregatesFilter<"User"> | string
    provider?: EnumAuthProviderWithAggregatesFilter<"User"> | $Enums.AuthProvider
    providerSubject?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    country?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TripWhereInput = {
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    id?: StringFilter<"Trip"> | string
    ownerId?: StringFilter<"Trip"> | string
    title?: StringFilter<"Trip"> | string
    description?: StringNullableFilter<"Trip"> | string | null
    destination?: StringFilter<"Trip"> | string
    destinationCountry?: StringNullableFilter<"Trip"> | string | null
    destinationCity?: StringNullableFilter<"Trip"> | string | null
    budgetTotal?: DecimalNullableFilter<"Trip"> | Decimal | DecimalJsLike | number | string | null
    travelerCount?: IntFilter<"Trip"> | number
    startDate?: DateTimeFilter<"Trip"> | Date | string
    endDate?: DateTimeFilter<"Trip"> | Date | string
    timezone?: StringFilter<"Trip"> | string
    coverImageUrl?: StringNullableFilter<"Trip"> | string | null
    status?: EnumTripStatusFilter<"Trip"> | $Enums.TripStatus
    endedAt?: DateTimeNullableFilter<"Trip"> | Date | string | null
    endedByUserId?: StringNullableFilter<"Trip"> | string | null
    isTemplatePublished?: BoolFilter<"Trip"> | boolean
    templatePublishedAt?: DateTimeNullableFilter<"Trip"> | Date | string | null
    templateUseCount?: IntFilter<"Trip"> | number
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    updatedAt?: DateTimeFilter<"Trip"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: TripMemberListRelationFilter
    days?: TripDayListRelationFilter
    invitations?: TripInvitationListRelationFilter
    ratings?: RatingListRelationFilter
  }

  export type TripOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    destination?: SortOrder
    destinationCountry?: SortOrderInput | SortOrder
    destinationCity?: SortOrderInput | SortOrder
    budgetTotal?: SortOrderInput | SortOrder
    travelerCount?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    timezone?: SortOrder
    coverImageUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    endedByUserId?: SortOrderInput | SortOrder
    isTemplatePublished?: SortOrder
    templatePublishedAt?: SortOrderInput | SortOrder
    templateUseCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    members?: TripMemberOrderByRelationAggregateInput
    days?: TripDayOrderByRelationAggregateInput
    invitations?: TripInvitationOrderByRelationAggregateInput
    ratings?: RatingOrderByRelationAggregateInput
  }

  export type TripWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    ownerId?: StringFilter<"Trip"> | string
    title?: StringFilter<"Trip"> | string
    description?: StringNullableFilter<"Trip"> | string | null
    destination?: StringFilter<"Trip"> | string
    destinationCountry?: StringNullableFilter<"Trip"> | string | null
    destinationCity?: StringNullableFilter<"Trip"> | string | null
    budgetTotal?: DecimalNullableFilter<"Trip"> | Decimal | DecimalJsLike | number | string | null
    travelerCount?: IntFilter<"Trip"> | number
    startDate?: DateTimeFilter<"Trip"> | Date | string
    endDate?: DateTimeFilter<"Trip"> | Date | string
    timezone?: StringFilter<"Trip"> | string
    coverImageUrl?: StringNullableFilter<"Trip"> | string | null
    status?: EnumTripStatusFilter<"Trip"> | $Enums.TripStatus
    endedAt?: DateTimeNullableFilter<"Trip"> | Date | string | null
    endedByUserId?: StringNullableFilter<"Trip"> | string | null
    isTemplatePublished?: BoolFilter<"Trip"> | boolean
    templatePublishedAt?: DateTimeNullableFilter<"Trip"> | Date | string | null
    templateUseCount?: IntFilter<"Trip"> | number
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    updatedAt?: DateTimeFilter<"Trip"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: TripMemberListRelationFilter
    days?: TripDayListRelationFilter
    invitations?: TripInvitationListRelationFilter
    ratings?: RatingListRelationFilter
  }, "id">

  export type TripOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    destination?: SortOrder
    destinationCountry?: SortOrderInput | SortOrder
    destinationCity?: SortOrderInput | SortOrder
    budgetTotal?: SortOrderInput | SortOrder
    travelerCount?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    timezone?: SortOrder
    coverImageUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    endedByUserId?: SortOrderInput | SortOrder
    isTemplatePublished?: SortOrder
    templatePublishedAt?: SortOrderInput | SortOrder
    templateUseCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TripCountOrderByAggregateInput
    _avg?: TripAvgOrderByAggregateInput
    _max?: TripMaxOrderByAggregateInput
    _min?: TripMinOrderByAggregateInput
    _sum?: TripSumOrderByAggregateInput
  }

  export type TripScalarWhereWithAggregatesInput = {
    AND?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    OR?: TripScalarWhereWithAggregatesInput[]
    NOT?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Trip"> | string
    ownerId?: StringWithAggregatesFilter<"Trip"> | string
    title?: StringWithAggregatesFilter<"Trip"> | string
    description?: StringNullableWithAggregatesFilter<"Trip"> | string | null
    destination?: StringWithAggregatesFilter<"Trip"> | string
    destinationCountry?: StringNullableWithAggregatesFilter<"Trip"> | string | null
    destinationCity?: StringNullableWithAggregatesFilter<"Trip"> | string | null
    budgetTotal?: DecimalNullableWithAggregatesFilter<"Trip"> | Decimal | DecimalJsLike | number | string | null
    travelerCount?: IntWithAggregatesFilter<"Trip"> | number
    startDate?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
    timezone?: StringWithAggregatesFilter<"Trip"> | string
    coverImageUrl?: StringNullableWithAggregatesFilter<"Trip"> | string | null
    status?: EnumTripStatusWithAggregatesFilter<"Trip"> | $Enums.TripStatus
    endedAt?: DateTimeNullableWithAggregatesFilter<"Trip"> | Date | string | null
    endedByUserId?: StringNullableWithAggregatesFilter<"Trip"> | string | null
    isTemplatePublished?: BoolWithAggregatesFilter<"Trip"> | boolean
    templatePublishedAt?: DateTimeNullableWithAggregatesFilter<"Trip"> | Date | string | null
    templateUseCount?: IntWithAggregatesFilter<"Trip"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
  }

  export type TripMemberWhereInput = {
    AND?: TripMemberWhereInput | TripMemberWhereInput[]
    OR?: TripMemberWhereInput[]
    NOT?: TripMemberWhereInput | TripMemberWhereInput[]
    id?: StringFilter<"TripMember"> | string
    tripId?: StringFilter<"TripMember"> | string
    userId?: StringFilter<"TripMember"> | string
    role?: EnumTripMemberRoleFilter<"TripMember"> | $Enums.TripMemberRole
    joinedAt?: DateTimeFilter<"TripMember"> | Date | string
    addedByUserId?: StringNullableFilter<"TripMember"> | string | null
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TripMemberOrderByWithRelationInput = {
    id?: SortOrder
    tripId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    addedByUserId?: SortOrderInput | SortOrder
    trip?: TripOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type TripMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tripId_userId?: TripMemberTripIdUserIdCompoundUniqueInput
    AND?: TripMemberWhereInput | TripMemberWhereInput[]
    OR?: TripMemberWhereInput[]
    NOT?: TripMemberWhereInput | TripMemberWhereInput[]
    tripId?: StringFilter<"TripMember"> | string
    userId?: StringFilter<"TripMember"> | string
    role?: EnumTripMemberRoleFilter<"TripMember"> | $Enums.TripMemberRole
    joinedAt?: DateTimeFilter<"TripMember"> | Date | string
    addedByUserId?: StringNullableFilter<"TripMember"> | string | null
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "tripId_userId">

  export type TripMemberOrderByWithAggregationInput = {
    id?: SortOrder
    tripId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    addedByUserId?: SortOrderInput | SortOrder
    _count?: TripMemberCountOrderByAggregateInput
    _max?: TripMemberMaxOrderByAggregateInput
    _min?: TripMemberMinOrderByAggregateInput
  }

  export type TripMemberScalarWhereWithAggregatesInput = {
    AND?: TripMemberScalarWhereWithAggregatesInput | TripMemberScalarWhereWithAggregatesInput[]
    OR?: TripMemberScalarWhereWithAggregatesInput[]
    NOT?: TripMemberScalarWhereWithAggregatesInput | TripMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TripMember"> | string
    tripId?: StringWithAggregatesFilter<"TripMember"> | string
    userId?: StringWithAggregatesFilter<"TripMember"> | string
    role?: EnumTripMemberRoleWithAggregatesFilter<"TripMember"> | $Enums.TripMemberRole
    joinedAt?: DateTimeWithAggregatesFilter<"TripMember"> | Date | string
    addedByUserId?: StringNullableWithAggregatesFilter<"TripMember"> | string | null
  }

  export type TripDayWhereInput = {
    AND?: TripDayWhereInput | TripDayWhereInput[]
    OR?: TripDayWhereInput[]
    NOT?: TripDayWhereInput | TripDayWhereInput[]
    id?: StringFilter<"TripDay"> | string
    tripId?: StringFilter<"TripDay"> | string
    dayNumber?: IntFilter<"TripDay"> | number
    date?: DateTimeFilter<"TripDay"> | Date | string
    title?: StringNullableFilter<"TripDay"> | string | null
    note?: StringNullableFilter<"TripDay"> | string | null
    createdAt?: DateTimeFilter<"TripDay"> | Date | string
    updatedAt?: DateTimeFilter<"TripDay"> | Date | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
    items?: ItineraryItemListRelationFilter
  }

  export type TripDayOrderByWithRelationInput = {
    id?: SortOrder
    tripId?: SortOrder
    dayNumber?: SortOrder
    date?: SortOrder
    title?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    trip?: TripOrderByWithRelationInput
    items?: ItineraryItemOrderByRelationAggregateInput
  }

  export type TripDayWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tripId_dayNumber?: TripDayTripIdDayNumberCompoundUniqueInput
    AND?: TripDayWhereInput | TripDayWhereInput[]
    OR?: TripDayWhereInput[]
    NOT?: TripDayWhereInput | TripDayWhereInput[]
    tripId?: StringFilter<"TripDay"> | string
    dayNumber?: IntFilter<"TripDay"> | number
    date?: DateTimeFilter<"TripDay"> | Date | string
    title?: StringNullableFilter<"TripDay"> | string | null
    note?: StringNullableFilter<"TripDay"> | string | null
    createdAt?: DateTimeFilter<"TripDay"> | Date | string
    updatedAt?: DateTimeFilter<"TripDay"> | Date | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
    items?: ItineraryItemListRelationFilter
  }, "id" | "tripId_dayNumber">

  export type TripDayOrderByWithAggregationInput = {
    id?: SortOrder
    tripId?: SortOrder
    dayNumber?: SortOrder
    date?: SortOrder
    title?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TripDayCountOrderByAggregateInput
    _avg?: TripDayAvgOrderByAggregateInput
    _max?: TripDayMaxOrderByAggregateInput
    _min?: TripDayMinOrderByAggregateInput
    _sum?: TripDaySumOrderByAggregateInput
  }

  export type TripDayScalarWhereWithAggregatesInput = {
    AND?: TripDayScalarWhereWithAggregatesInput | TripDayScalarWhereWithAggregatesInput[]
    OR?: TripDayScalarWhereWithAggregatesInput[]
    NOT?: TripDayScalarWhereWithAggregatesInput | TripDayScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TripDay"> | string
    tripId?: StringWithAggregatesFilter<"TripDay"> | string
    dayNumber?: IntWithAggregatesFilter<"TripDay"> | number
    date?: DateTimeWithAggregatesFilter<"TripDay"> | Date | string
    title?: StringNullableWithAggregatesFilter<"TripDay"> | string | null
    note?: StringNullableWithAggregatesFilter<"TripDay"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TripDay"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TripDay"> | Date | string
  }

  export type ItineraryItemWhereInput = {
    AND?: ItineraryItemWhereInput | ItineraryItemWhereInput[]
    OR?: ItineraryItemWhereInput[]
    NOT?: ItineraryItemWhereInput | ItineraryItemWhereInput[]
    id?: StringFilter<"ItineraryItem"> | string
    tripDayId?: StringFilter<"ItineraryItem"> | string
    title?: StringFilter<"ItineraryItem"> | string
    description?: StringNullableFilter<"ItineraryItem"> | string | null
    placeName?: StringNullableFilter<"ItineraryItem"> | string | null
    placeAddress?: StringNullableFilter<"ItineraryItem"> | string | null
    country?: StringNullableFilter<"ItineraryItem"> | string | null
    city?: StringNullableFilter<"ItineraryItem"> | string | null
    latitude?: DecimalNullableFilter<"ItineraryItem"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"ItineraryItem"> | Decimal | DecimalJsLike | number | string | null
    startTime?: DateTimeNullableFilter<"ItineraryItem"> | Date | string | null
    endTime?: DateTimeNullableFilter<"ItineraryItem"> | Date | string | null
    estimatedCost?: DecimalNullableFilter<"ItineraryItem"> | Decimal | DecimalJsLike | number | string | null
    currency?: StringNullableFilter<"ItineraryItem"> | string | null
    note?: StringNullableFilter<"ItineraryItem"> | string | null
    sortOrder?: IntFilter<"ItineraryItem"> | number
    createdByUserId?: StringNullableFilter<"ItineraryItem"> | string | null
    isCompleted?: BoolFilter<"ItineraryItem"> | boolean
    createdAt?: DateTimeFilter<"ItineraryItem"> | Date | string
    updatedAt?: DateTimeFilter<"ItineraryItem"> | Date | string
    tripDay?: XOR<TripDayScalarRelationFilter, TripDayWhereInput>
  }

  export type ItineraryItemOrderByWithRelationInput = {
    id?: SortOrder
    tripDayId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    placeName?: SortOrderInput | SortOrder
    placeAddress?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    startTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    estimatedCost?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    createdByUserId?: SortOrderInput | SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tripDay?: TripDayOrderByWithRelationInput
  }

  export type ItineraryItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ItineraryItemWhereInput | ItineraryItemWhereInput[]
    OR?: ItineraryItemWhereInput[]
    NOT?: ItineraryItemWhereInput | ItineraryItemWhereInput[]
    tripDayId?: StringFilter<"ItineraryItem"> | string
    title?: StringFilter<"ItineraryItem"> | string
    description?: StringNullableFilter<"ItineraryItem"> | string | null
    placeName?: StringNullableFilter<"ItineraryItem"> | string | null
    placeAddress?: StringNullableFilter<"ItineraryItem"> | string | null
    country?: StringNullableFilter<"ItineraryItem"> | string | null
    city?: StringNullableFilter<"ItineraryItem"> | string | null
    latitude?: DecimalNullableFilter<"ItineraryItem"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"ItineraryItem"> | Decimal | DecimalJsLike | number | string | null
    startTime?: DateTimeNullableFilter<"ItineraryItem"> | Date | string | null
    endTime?: DateTimeNullableFilter<"ItineraryItem"> | Date | string | null
    estimatedCost?: DecimalNullableFilter<"ItineraryItem"> | Decimal | DecimalJsLike | number | string | null
    currency?: StringNullableFilter<"ItineraryItem"> | string | null
    note?: StringNullableFilter<"ItineraryItem"> | string | null
    sortOrder?: IntFilter<"ItineraryItem"> | number
    createdByUserId?: StringNullableFilter<"ItineraryItem"> | string | null
    isCompleted?: BoolFilter<"ItineraryItem"> | boolean
    createdAt?: DateTimeFilter<"ItineraryItem"> | Date | string
    updatedAt?: DateTimeFilter<"ItineraryItem"> | Date | string
    tripDay?: XOR<TripDayScalarRelationFilter, TripDayWhereInput>
  }, "id">

  export type ItineraryItemOrderByWithAggregationInput = {
    id?: SortOrder
    tripDayId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    placeName?: SortOrderInput | SortOrder
    placeAddress?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    startTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    estimatedCost?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    createdByUserId?: SortOrderInput | SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ItineraryItemCountOrderByAggregateInput
    _avg?: ItineraryItemAvgOrderByAggregateInput
    _max?: ItineraryItemMaxOrderByAggregateInput
    _min?: ItineraryItemMinOrderByAggregateInput
    _sum?: ItineraryItemSumOrderByAggregateInput
  }

  export type ItineraryItemScalarWhereWithAggregatesInput = {
    AND?: ItineraryItemScalarWhereWithAggregatesInput | ItineraryItemScalarWhereWithAggregatesInput[]
    OR?: ItineraryItemScalarWhereWithAggregatesInput[]
    NOT?: ItineraryItemScalarWhereWithAggregatesInput | ItineraryItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ItineraryItem"> | string
    tripDayId?: StringWithAggregatesFilter<"ItineraryItem"> | string
    title?: StringWithAggregatesFilter<"ItineraryItem"> | string
    description?: StringNullableWithAggregatesFilter<"ItineraryItem"> | string | null
    placeName?: StringNullableWithAggregatesFilter<"ItineraryItem"> | string | null
    placeAddress?: StringNullableWithAggregatesFilter<"ItineraryItem"> | string | null
    country?: StringNullableWithAggregatesFilter<"ItineraryItem"> | string | null
    city?: StringNullableWithAggregatesFilter<"ItineraryItem"> | string | null
    latitude?: DecimalNullableWithAggregatesFilter<"ItineraryItem"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableWithAggregatesFilter<"ItineraryItem"> | Decimal | DecimalJsLike | number | string | null
    startTime?: DateTimeNullableWithAggregatesFilter<"ItineraryItem"> | Date | string | null
    endTime?: DateTimeNullableWithAggregatesFilter<"ItineraryItem"> | Date | string | null
    estimatedCost?: DecimalNullableWithAggregatesFilter<"ItineraryItem"> | Decimal | DecimalJsLike | number | string | null
    currency?: StringNullableWithAggregatesFilter<"ItineraryItem"> | string | null
    note?: StringNullableWithAggregatesFilter<"ItineraryItem"> | string | null
    sortOrder?: IntWithAggregatesFilter<"ItineraryItem"> | number
    createdByUserId?: StringNullableWithAggregatesFilter<"ItineraryItem"> | string | null
    isCompleted?: BoolWithAggregatesFilter<"ItineraryItem"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ItineraryItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ItineraryItem"> | Date | string
  }

  export type TripInvitationWhereInput = {
    AND?: TripInvitationWhereInput | TripInvitationWhereInput[]
    OR?: TripInvitationWhereInput[]
    NOT?: TripInvitationWhereInput | TripInvitationWhereInput[]
    id?: StringFilter<"TripInvitation"> | string
    tripId?: StringFilter<"TripInvitation"> | string
    inviterId?: StringFilter<"TripInvitation"> | string
    inviteeUserId?: StringNullableFilter<"TripInvitation"> | string | null
    inviteeEmail?: StringNullableFilter<"TripInvitation"> | string | null
    message?: StringNullableFilter<"TripInvitation"> | string | null
    status?: EnumInvitationStatusFilter<"TripInvitation"> | $Enums.InvitationStatus
    expiresAt?: DateTimeNullableFilter<"TripInvitation"> | Date | string | null
    respondedAt?: DateTimeNullableFilter<"TripInvitation"> | Date | string | null
    createdAt?: DateTimeFilter<"TripInvitation"> | Date | string
    updatedAt?: DateTimeFilter<"TripInvitation"> | Date | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
    inviter?: XOR<UserScalarRelationFilter, UserWhereInput>
    invitee?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type TripInvitationOrderByWithRelationInput = {
    id?: SortOrder
    tripId?: SortOrder
    inviterId?: SortOrder
    inviteeUserId?: SortOrderInput | SortOrder
    inviteeEmail?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    respondedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    trip?: TripOrderByWithRelationInput
    inviter?: UserOrderByWithRelationInput
    invitee?: UserOrderByWithRelationInput
  }

  export type TripInvitationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TripInvitationWhereInput | TripInvitationWhereInput[]
    OR?: TripInvitationWhereInput[]
    NOT?: TripInvitationWhereInput | TripInvitationWhereInput[]
    tripId?: StringFilter<"TripInvitation"> | string
    inviterId?: StringFilter<"TripInvitation"> | string
    inviteeUserId?: StringNullableFilter<"TripInvitation"> | string | null
    inviteeEmail?: StringNullableFilter<"TripInvitation"> | string | null
    message?: StringNullableFilter<"TripInvitation"> | string | null
    status?: EnumInvitationStatusFilter<"TripInvitation"> | $Enums.InvitationStatus
    expiresAt?: DateTimeNullableFilter<"TripInvitation"> | Date | string | null
    respondedAt?: DateTimeNullableFilter<"TripInvitation"> | Date | string | null
    createdAt?: DateTimeFilter<"TripInvitation"> | Date | string
    updatedAt?: DateTimeFilter<"TripInvitation"> | Date | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
    inviter?: XOR<UserScalarRelationFilter, UserWhereInput>
    invitee?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type TripInvitationOrderByWithAggregationInput = {
    id?: SortOrder
    tripId?: SortOrder
    inviterId?: SortOrder
    inviteeUserId?: SortOrderInput | SortOrder
    inviteeEmail?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    respondedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TripInvitationCountOrderByAggregateInput
    _max?: TripInvitationMaxOrderByAggregateInput
    _min?: TripInvitationMinOrderByAggregateInput
  }

  export type TripInvitationScalarWhereWithAggregatesInput = {
    AND?: TripInvitationScalarWhereWithAggregatesInput | TripInvitationScalarWhereWithAggregatesInput[]
    OR?: TripInvitationScalarWhereWithAggregatesInput[]
    NOT?: TripInvitationScalarWhereWithAggregatesInput | TripInvitationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TripInvitation"> | string
    tripId?: StringWithAggregatesFilter<"TripInvitation"> | string
    inviterId?: StringWithAggregatesFilter<"TripInvitation"> | string
    inviteeUserId?: StringNullableWithAggregatesFilter<"TripInvitation"> | string | null
    inviteeEmail?: StringNullableWithAggregatesFilter<"TripInvitation"> | string | null
    message?: StringNullableWithAggregatesFilter<"TripInvitation"> | string | null
    status?: EnumInvitationStatusWithAggregatesFilter<"TripInvitation"> | $Enums.InvitationStatus
    expiresAt?: DateTimeNullableWithAggregatesFilter<"TripInvitation"> | Date | string | null
    respondedAt?: DateTimeNullableWithAggregatesFilter<"TripInvitation"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TripInvitation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TripInvitation"> | Date | string
  }

  export type RatingWhereInput = {
    AND?: RatingWhereInput | RatingWhereInput[]
    OR?: RatingWhereInput[]
    NOT?: RatingWhereInput | RatingWhereInput[]
    id?: StringFilter<"Rating"> | string
    userId?: StringFilter<"Rating"> | string
    tripId?: StringFilter<"Rating"> | string
    score?: IntFilter<"Rating"> | number
    comment?: StringNullableFilter<"Rating"> | string | null
    createdAt?: DateTimeFilter<"Rating"> | Date | string
    updatedAt?: DateTimeFilter<"Rating"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }

  export type RatingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    score?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    trip?: TripOrderByWithRelationInput
  }

  export type RatingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_tripId?: RatingUserIdTripIdCompoundUniqueInput
    AND?: RatingWhereInput | RatingWhereInput[]
    OR?: RatingWhereInput[]
    NOT?: RatingWhereInput | RatingWhereInput[]
    userId?: StringFilter<"Rating"> | string
    tripId?: StringFilter<"Rating"> | string
    score?: IntFilter<"Rating"> | number
    comment?: StringNullableFilter<"Rating"> | string | null
    createdAt?: DateTimeFilter<"Rating"> | Date | string
    updatedAt?: DateTimeFilter<"Rating"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }, "id" | "userId_tripId">

  export type RatingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    score?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RatingCountOrderByAggregateInput
    _avg?: RatingAvgOrderByAggregateInput
    _max?: RatingMaxOrderByAggregateInput
    _min?: RatingMinOrderByAggregateInput
    _sum?: RatingSumOrderByAggregateInput
  }

  export type RatingScalarWhereWithAggregatesInput = {
    AND?: RatingScalarWhereWithAggregatesInput | RatingScalarWhereWithAggregatesInput[]
    OR?: RatingScalarWhereWithAggregatesInput[]
    NOT?: RatingScalarWhereWithAggregatesInput | RatingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Rating"> | string
    userId?: StringWithAggregatesFilter<"Rating"> | string
    tripId?: StringWithAggregatesFilter<"Rating"> | string
    score?: IntWithAggregatesFilter<"Rating"> | number
    comment?: StringNullableWithAggregatesFilter<"Rating"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Rating"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Rating"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    supabaseAuthId: string
    provider?: $Enums.AuthProvider
    providerSubject?: string | null
    email: string
    fullName: string
    avatarUrl?: string | null
    username?: string | null
    bio?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedTrips?: TripCreateNestedManyWithoutOwnerInput
    tripMembers?: TripMemberCreateNestedManyWithoutUserInput
    invitationsSent?: TripInvitationCreateNestedManyWithoutInviterInput
    invitationsRecv?: TripInvitationCreateNestedManyWithoutInviteeInput
    ratings?: RatingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    supabaseAuthId: string
    provider?: $Enums.AuthProvider
    providerSubject?: string | null
    email: string
    fullName: string
    avatarUrl?: string | null
    username?: string | null
    bio?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedTrips?: TripUncheckedCreateNestedManyWithoutOwnerInput
    tripMembers?: TripMemberUncheckedCreateNestedManyWithoutUserInput
    invitationsSent?: TripInvitationUncheckedCreateNestedManyWithoutInviterInput
    invitationsRecv?: TripInvitationUncheckedCreateNestedManyWithoutInviteeInput
    ratings?: RatingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseAuthId?: StringFieldUpdateOperationsInput | string
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerSubject?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedTrips?: TripUpdateManyWithoutOwnerNestedInput
    tripMembers?: TripMemberUpdateManyWithoutUserNestedInput
    invitationsSent?: TripInvitationUpdateManyWithoutInviterNestedInput
    invitationsRecv?: TripInvitationUpdateManyWithoutInviteeNestedInput
    ratings?: RatingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseAuthId?: StringFieldUpdateOperationsInput | string
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerSubject?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedTrips?: TripUncheckedUpdateManyWithoutOwnerNestedInput
    tripMembers?: TripMemberUncheckedUpdateManyWithoutUserNestedInput
    invitationsSent?: TripInvitationUncheckedUpdateManyWithoutInviterNestedInput
    invitationsRecv?: TripInvitationUncheckedUpdateManyWithoutInviteeNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    supabaseAuthId: string
    provider?: $Enums.AuthProvider
    providerSubject?: string | null
    email: string
    fullName: string
    avatarUrl?: string | null
    username?: string | null
    bio?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseAuthId?: StringFieldUpdateOperationsInput | string
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerSubject?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseAuthId?: StringFieldUpdateOperationsInput | string
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerSubject?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripCreateInput = {
    id?: string
    title: string
    description?: string | null
    destination: string
    destinationCountry?: string | null
    destinationCity?: string | null
    budgetTotal?: Decimal | DecimalJsLike | number | string | null
    travelerCount: number
    startDate: Date | string
    endDate: Date | string
    timezone?: string
    coverImageUrl?: string | null
    status?: $Enums.TripStatus
    endedAt?: Date | string | null
    endedByUserId?: string | null
    isTemplatePublished?: boolean
    templatePublishedAt?: Date | string | null
    templateUseCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedTripsInput
    members?: TripMemberCreateNestedManyWithoutTripInput
    days?: TripDayCreateNestedManyWithoutTripInput
    invitations?: TripInvitationCreateNestedManyWithoutTripInput
    ratings?: RatingCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateInput = {
    id?: string
    ownerId: string
    title: string
    description?: string | null
    destination: string
    destinationCountry?: string | null
    destinationCity?: string | null
    budgetTotal?: Decimal | DecimalJsLike | number | string | null
    travelerCount: number
    startDate: Date | string
    endDate: Date | string
    timezone?: string
    coverImageUrl?: string | null
    status?: $Enums.TripStatus
    endedAt?: Date | string | null
    endedByUserId?: string | null
    isTemplatePublished?: boolean
    templatePublishedAt?: Date | string | null
    templateUseCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: TripMemberUncheckedCreateNestedManyWithoutTripInput
    days?: TripDayUncheckedCreateNestedManyWithoutTripInput
    invitations?: TripInvitationUncheckedCreateNestedManyWithoutTripInput
    ratings?: RatingUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: StringFieldUpdateOperationsInput | string
    destinationCountry?: NullableStringFieldUpdateOperationsInput | string | null
    destinationCity?: NullableStringFieldUpdateOperationsInput | string | null
    budgetTotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    travelerCount?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    isTemplatePublished?: BoolFieldUpdateOperationsInput | boolean
    templatePublishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    templateUseCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedTripsNestedInput
    members?: TripMemberUpdateManyWithoutTripNestedInput
    days?: TripDayUpdateManyWithoutTripNestedInput
    invitations?: TripInvitationUpdateManyWithoutTripNestedInput
    ratings?: RatingUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: StringFieldUpdateOperationsInput | string
    destinationCountry?: NullableStringFieldUpdateOperationsInput | string | null
    destinationCity?: NullableStringFieldUpdateOperationsInput | string | null
    budgetTotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    travelerCount?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    isTemplatePublished?: BoolFieldUpdateOperationsInput | boolean
    templatePublishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    templateUseCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TripMemberUncheckedUpdateManyWithoutTripNestedInput
    days?: TripDayUncheckedUpdateManyWithoutTripNestedInput
    invitations?: TripInvitationUncheckedUpdateManyWithoutTripNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripCreateManyInput = {
    id?: string
    ownerId: string
    title: string
    description?: string | null
    destination: string
    destinationCountry?: string | null
    destinationCity?: string | null
    budgetTotal?: Decimal | DecimalJsLike | number | string | null
    travelerCount: number
    startDate: Date | string
    endDate: Date | string
    timezone?: string
    coverImageUrl?: string | null
    status?: $Enums.TripStatus
    endedAt?: Date | string | null
    endedByUserId?: string | null
    isTemplatePublished?: boolean
    templatePublishedAt?: Date | string | null
    templateUseCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: StringFieldUpdateOperationsInput | string
    destinationCountry?: NullableStringFieldUpdateOperationsInput | string | null
    destinationCity?: NullableStringFieldUpdateOperationsInput | string | null
    budgetTotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    travelerCount?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    isTemplatePublished?: BoolFieldUpdateOperationsInput | boolean
    templatePublishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    templateUseCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: StringFieldUpdateOperationsInput | string
    destinationCountry?: NullableStringFieldUpdateOperationsInput | string | null
    destinationCity?: NullableStringFieldUpdateOperationsInput | string | null
    budgetTotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    travelerCount?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    isTemplatePublished?: BoolFieldUpdateOperationsInput | boolean
    templatePublishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    templateUseCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripMemberCreateInput = {
    id?: string
    role?: $Enums.TripMemberRole
    joinedAt?: Date | string
    addedByUserId?: string | null
    trip: TripCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutTripMembersInput
  }

  export type TripMemberUncheckedCreateInput = {
    id?: string
    tripId: string
    userId: string
    role?: $Enums.TripMemberRole
    joinedAt?: Date | string
    addedByUserId?: string | null
  }

  export type TripMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumTripMemberRoleFieldUpdateOperationsInput | $Enums.TripMemberRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    trip?: TripUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutTripMembersNestedInput
  }

  export type TripMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumTripMemberRoleFieldUpdateOperationsInput | $Enums.TripMemberRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TripMemberCreateManyInput = {
    id?: string
    tripId: string
    userId: string
    role?: $Enums.TripMemberRole
    joinedAt?: Date | string
    addedByUserId?: string | null
  }

  export type TripMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumTripMemberRoleFieldUpdateOperationsInput | $Enums.TripMemberRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TripMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumTripMemberRoleFieldUpdateOperationsInput | $Enums.TripMemberRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TripDayCreateInput = {
    id?: string
    dayNumber: number
    date: Date | string
    title?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trip: TripCreateNestedOneWithoutDaysInput
    items?: ItineraryItemCreateNestedManyWithoutTripDayInput
  }

  export type TripDayUncheckedCreateInput = {
    id?: string
    tripId: string
    dayNumber: number
    date: Date | string
    title?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ItineraryItemUncheckedCreateNestedManyWithoutTripDayInput
  }

  export type TripDayUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayNumber?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutDaysNestedInput
    items?: ItineraryItemUpdateManyWithoutTripDayNestedInput
  }

  export type TripDayUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    dayNumber?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItineraryItemUncheckedUpdateManyWithoutTripDayNestedInput
  }

  export type TripDayCreateManyInput = {
    id?: string
    tripId: string
    dayNumber: number
    date: Date | string
    title?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripDayUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayNumber?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripDayUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    dayNumber?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItineraryItemCreateInput = {
    id?: string
    title: string
    description?: string | null
    placeName?: string | null
    placeAddress?: string | null
    country?: string | null
    city?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    startTime?: Date | string | null
    endTime?: Date | string | null
    estimatedCost?: Decimal | DecimalJsLike | number | string | null
    currency?: string | null
    note?: string | null
    sortOrder?: number
    createdByUserId?: string | null
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tripDay: TripDayCreateNestedOneWithoutItemsInput
  }

  export type ItineraryItemUncheckedCreateInput = {
    id?: string
    tripDayId: string
    title: string
    description?: string | null
    placeName?: string | null
    placeAddress?: string | null
    country?: string | null
    city?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    startTime?: Date | string | null
    endTime?: Date | string | null
    estimatedCost?: Decimal | DecimalJsLike | number | string | null
    currency?: string | null
    note?: string | null
    sortOrder?: number
    createdByUserId?: string | null
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItineraryItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    placeName?: NullableStringFieldUpdateOperationsInput | string | null
    placeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripDay?: TripDayUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ItineraryItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripDayId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    placeName?: NullableStringFieldUpdateOperationsInput | string | null
    placeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItineraryItemCreateManyInput = {
    id?: string
    tripDayId: string
    title: string
    description?: string | null
    placeName?: string | null
    placeAddress?: string | null
    country?: string | null
    city?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    startTime?: Date | string | null
    endTime?: Date | string | null
    estimatedCost?: Decimal | DecimalJsLike | number | string | null
    currency?: string | null
    note?: string | null
    sortOrder?: number
    createdByUserId?: string | null
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItineraryItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    placeName?: NullableStringFieldUpdateOperationsInput | string | null
    placeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItineraryItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripDayId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    placeName?: NullableStringFieldUpdateOperationsInput | string | null
    placeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripInvitationCreateInput = {
    id?: string
    inviteeEmail?: string | null
    message?: string | null
    status?: $Enums.InvitationStatus
    expiresAt?: Date | string | null
    respondedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trip: TripCreateNestedOneWithoutInvitationsInput
    inviter: UserCreateNestedOneWithoutInvitationsSentInput
    invitee?: UserCreateNestedOneWithoutInvitationsRecvInput
  }

  export type TripInvitationUncheckedCreateInput = {
    id?: string
    tripId: string
    inviterId: string
    inviteeUserId?: string | null
    inviteeEmail?: string | null
    message?: string | null
    status?: $Enums.InvitationStatus
    expiresAt?: Date | string | null
    respondedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripInvitationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    inviteeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutInvitationsNestedInput
    inviter?: UserUpdateOneRequiredWithoutInvitationsSentNestedInput
    invitee?: UserUpdateOneWithoutInvitationsRecvNestedInput
  }

  export type TripInvitationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    inviterId?: StringFieldUpdateOperationsInput | string
    inviteeUserId?: NullableStringFieldUpdateOperationsInput | string | null
    inviteeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripInvitationCreateManyInput = {
    id?: string
    tripId: string
    inviterId: string
    inviteeUserId?: string | null
    inviteeEmail?: string | null
    message?: string | null
    status?: $Enums.InvitationStatus
    expiresAt?: Date | string | null
    respondedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripInvitationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    inviteeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripInvitationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    inviterId?: StringFieldUpdateOperationsInput | string
    inviteeUserId?: NullableStringFieldUpdateOperationsInput | string | null
    inviteeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingCreateInput = {
    id?: string
    score: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRatingsInput
    trip: TripCreateNestedOneWithoutRatingsInput
  }

  export type RatingUncheckedCreateInput = {
    id?: string
    userId: string
    tripId: string
    score: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RatingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRatingsNestedInput
    trip?: TripUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type RatingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingCreateManyInput = {
    id?: string
    userId: string
    tripId: string
    score: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RatingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumAuthProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthProviderFilter<$PrismaModel> | $Enums.AuthProvider
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TripListRelationFilter = {
    every?: TripWhereInput
    some?: TripWhereInput
    none?: TripWhereInput
  }

  export type TripMemberListRelationFilter = {
    every?: TripMemberWhereInput
    some?: TripMemberWhereInput
    none?: TripMemberWhereInput
  }

  export type TripInvitationListRelationFilter = {
    every?: TripInvitationWhereInput
    some?: TripInvitationWhereInput
    none?: TripInvitationWhereInput
  }

  export type RatingListRelationFilter = {
    every?: RatingWhereInput
    some?: RatingWhereInput
    none?: RatingWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TripOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TripMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TripInvitationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RatingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    supabaseAuthId?: SortOrder
    provider?: SortOrder
    providerSubject?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    avatarUrl?: SortOrder
    username?: SortOrder
    bio?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    supabaseAuthId?: SortOrder
    provider?: SortOrder
    providerSubject?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    avatarUrl?: SortOrder
    username?: SortOrder
    bio?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    supabaseAuthId?: SortOrder
    provider?: SortOrder
    providerSubject?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    avatarUrl?: SortOrder
    username?: SortOrder
    bio?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumAuthProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel> | $Enums.AuthProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthProviderFilter<$PrismaModel>
    _max?: NestedEnumAuthProviderFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumTripStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TripStatus | EnumTripStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TripStatus[] | ListEnumTripStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TripStatus[] | ListEnumTripStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTripStatusFilter<$PrismaModel> | $Enums.TripStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TripDayListRelationFilter = {
    every?: TripDayWhereInput
    some?: TripDayWhereInput
    none?: TripDayWhereInput
  }

  export type TripDayOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TripCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    destination?: SortOrder
    destinationCountry?: SortOrder
    destinationCity?: SortOrder
    budgetTotal?: SortOrder
    travelerCount?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    timezone?: SortOrder
    coverImageUrl?: SortOrder
    status?: SortOrder
    endedAt?: SortOrder
    endedByUserId?: SortOrder
    isTemplatePublished?: SortOrder
    templatePublishedAt?: SortOrder
    templateUseCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripAvgOrderByAggregateInput = {
    budgetTotal?: SortOrder
    travelerCount?: SortOrder
    templateUseCount?: SortOrder
  }

  export type TripMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    destination?: SortOrder
    destinationCountry?: SortOrder
    destinationCity?: SortOrder
    budgetTotal?: SortOrder
    travelerCount?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    timezone?: SortOrder
    coverImageUrl?: SortOrder
    status?: SortOrder
    endedAt?: SortOrder
    endedByUserId?: SortOrder
    isTemplatePublished?: SortOrder
    templatePublishedAt?: SortOrder
    templateUseCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    destination?: SortOrder
    destinationCountry?: SortOrder
    destinationCity?: SortOrder
    budgetTotal?: SortOrder
    travelerCount?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    timezone?: SortOrder
    coverImageUrl?: SortOrder
    status?: SortOrder
    endedAt?: SortOrder
    endedByUserId?: SortOrder
    isTemplatePublished?: SortOrder
    templatePublishedAt?: SortOrder
    templateUseCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripSumOrderByAggregateInput = {
    budgetTotal?: SortOrder
    travelerCount?: SortOrder
    templateUseCount?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumTripStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TripStatus | EnumTripStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TripStatus[] | ListEnumTripStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TripStatus[] | ListEnumTripStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTripStatusWithAggregatesFilter<$PrismaModel> | $Enums.TripStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTripStatusFilter<$PrismaModel>
    _max?: NestedEnumTripStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumTripMemberRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.TripMemberRole | EnumTripMemberRoleFieldRefInput<$PrismaModel>
    in?: $Enums.TripMemberRole[] | ListEnumTripMemberRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.TripMemberRole[] | ListEnumTripMemberRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumTripMemberRoleFilter<$PrismaModel> | $Enums.TripMemberRole
  }

  export type TripScalarRelationFilter = {
    is?: TripWhereInput
    isNot?: TripWhereInput
  }

  export type TripMemberTripIdUserIdCompoundUniqueInput = {
    tripId: string
    userId: string
  }

  export type TripMemberCountOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    addedByUserId?: SortOrder
  }

  export type TripMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    addedByUserId?: SortOrder
  }

  export type TripMemberMinOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    addedByUserId?: SortOrder
  }

  export type EnumTripMemberRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TripMemberRole | EnumTripMemberRoleFieldRefInput<$PrismaModel>
    in?: $Enums.TripMemberRole[] | ListEnumTripMemberRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.TripMemberRole[] | ListEnumTripMemberRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumTripMemberRoleWithAggregatesFilter<$PrismaModel> | $Enums.TripMemberRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTripMemberRoleFilter<$PrismaModel>
    _max?: NestedEnumTripMemberRoleFilter<$PrismaModel>
  }

  export type ItineraryItemListRelationFilter = {
    every?: ItineraryItemWhereInput
    some?: ItineraryItemWhereInput
    none?: ItineraryItemWhereInput
  }

  export type ItineraryItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TripDayTripIdDayNumberCompoundUniqueInput = {
    tripId: string
    dayNumber: number
  }

  export type TripDayCountOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    dayNumber?: SortOrder
    date?: SortOrder
    title?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripDayAvgOrderByAggregateInput = {
    dayNumber?: SortOrder
  }

  export type TripDayMaxOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    dayNumber?: SortOrder
    date?: SortOrder
    title?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripDayMinOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    dayNumber?: SortOrder
    date?: SortOrder
    title?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripDaySumOrderByAggregateInput = {
    dayNumber?: SortOrder
  }

  export type TripDayScalarRelationFilter = {
    is?: TripDayWhereInput
    isNot?: TripDayWhereInput
  }

  export type ItineraryItemCountOrderByAggregateInput = {
    id?: SortOrder
    tripDayId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    placeName?: SortOrder
    placeAddress?: SortOrder
    country?: SortOrder
    city?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    estimatedCost?: SortOrder
    currency?: SortOrder
    note?: SortOrder
    sortOrder?: SortOrder
    createdByUserId?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItineraryItemAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    estimatedCost?: SortOrder
    sortOrder?: SortOrder
  }

  export type ItineraryItemMaxOrderByAggregateInput = {
    id?: SortOrder
    tripDayId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    placeName?: SortOrder
    placeAddress?: SortOrder
    country?: SortOrder
    city?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    estimatedCost?: SortOrder
    currency?: SortOrder
    note?: SortOrder
    sortOrder?: SortOrder
    createdByUserId?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItineraryItemMinOrderByAggregateInput = {
    id?: SortOrder
    tripDayId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    placeName?: SortOrder
    placeAddress?: SortOrder
    country?: SortOrder
    city?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    estimatedCost?: SortOrder
    currency?: SortOrder
    note?: SortOrder
    sortOrder?: SortOrder
    createdByUserId?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItineraryItemSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    estimatedCost?: SortOrder
    sortOrder?: SortOrder
  }

  export type EnumInvitationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationStatus | EnumInvitationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvitationStatusFilter<$PrismaModel> | $Enums.InvitationStatus
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type TripInvitationCountOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    inviterId?: SortOrder
    inviteeUserId?: SortOrder
    inviteeEmail?: SortOrder
    message?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    respondedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripInvitationMaxOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    inviterId?: SortOrder
    inviteeUserId?: SortOrder
    inviteeEmail?: SortOrder
    message?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    respondedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripInvitationMinOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    inviterId?: SortOrder
    inviteeUserId?: SortOrder
    inviteeEmail?: SortOrder
    message?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    respondedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumInvitationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationStatus | EnumInvitationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvitationStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvitationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvitationStatusFilter<$PrismaModel>
    _max?: NestedEnumInvitationStatusFilter<$PrismaModel>
  }

  export type RatingUserIdTripIdCompoundUniqueInput = {
    userId: string
    tripId: string
  }

  export type RatingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    score?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RatingAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type RatingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    score?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RatingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    score?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RatingSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type TripCreateNestedManyWithoutOwnerInput = {
    create?: XOR<TripCreateWithoutOwnerInput, TripUncheckedCreateWithoutOwnerInput> | TripCreateWithoutOwnerInput[] | TripUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TripCreateOrConnectWithoutOwnerInput | TripCreateOrConnectWithoutOwnerInput[]
    createMany?: TripCreateManyOwnerInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type TripMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<TripMemberCreateWithoutUserInput, TripMemberUncheckedCreateWithoutUserInput> | TripMemberCreateWithoutUserInput[] | TripMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripMemberCreateOrConnectWithoutUserInput | TripMemberCreateOrConnectWithoutUserInput[]
    createMany?: TripMemberCreateManyUserInputEnvelope
    connect?: TripMemberWhereUniqueInput | TripMemberWhereUniqueInput[]
  }

  export type TripInvitationCreateNestedManyWithoutInviterInput = {
    create?: XOR<TripInvitationCreateWithoutInviterInput, TripInvitationUncheckedCreateWithoutInviterInput> | TripInvitationCreateWithoutInviterInput[] | TripInvitationUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: TripInvitationCreateOrConnectWithoutInviterInput | TripInvitationCreateOrConnectWithoutInviterInput[]
    createMany?: TripInvitationCreateManyInviterInputEnvelope
    connect?: TripInvitationWhereUniqueInput | TripInvitationWhereUniqueInput[]
  }

  export type TripInvitationCreateNestedManyWithoutInviteeInput = {
    create?: XOR<TripInvitationCreateWithoutInviteeInput, TripInvitationUncheckedCreateWithoutInviteeInput> | TripInvitationCreateWithoutInviteeInput[] | TripInvitationUncheckedCreateWithoutInviteeInput[]
    connectOrCreate?: TripInvitationCreateOrConnectWithoutInviteeInput | TripInvitationCreateOrConnectWithoutInviteeInput[]
    createMany?: TripInvitationCreateManyInviteeInputEnvelope
    connect?: TripInvitationWhereUniqueInput | TripInvitationWhereUniqueInput[]
  }

  export type RatingCreateNestedManyWithoutUserInput = {
    create?: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput> | RatingCreateWithoutUserInput[] | RatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutUserInput | RatingCreateOrConnectWithoutUserInput[]
    createMany?: RatingCreateManyUserInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type TripUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<TripCreateWithoutOwnerInput, TripUncheckedCreateWithoutOwnerInput> | TripCreateWithoutOwnerInput[] | TripUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TripCreateOrConnectWithoutOwnerInput | TripCreateOrConnectWithoutOwnerInput[]
    createMany?: TripCreateManyOwnerInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type TripMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TripMemberCreateWithoutUserInput, TripMemberUncheckedCreateWithoutUserInput> | TripMemberCreateWithoutUserInput[] | TripMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripMemberCreateOrConnectWithoutUserInput | TripMemberCreateOrConnectWithoutUserInput[]
    createMany?: TripMemberCreateManyUserInputEnvelope
    connect?: TripMemberWhereUniqueInput | TripMemberWhereUniqueInput[]
  }

  export type TripInvitationUncheckedCreateNestedManyWithoutInviterInput = {
    create?: XOR<TripInvitationCreateWithoutInviterInput, TripInvitationUncheckedCreateWithoutInviterInput> | TripInvitationCreateWithoutInviterInput[] | TripInvitationUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: TripInvitationCreateOrConnectWithoutInviterInput | TripInvitationCreateOrConnectWithoutInviterInput[]
    createMany?: TripInvitationCreateManyInviterInputEnvelope
    connect?: TripInvitationWhereUniqueInput | TripInvitationWhereUniqueInput[]
  }

  export type TripInvitationUncheckedCreateNestedManyWithoutInviteeInput = {
    create?: XOR<TripInvitationCreateWithoutInviteeInput, TripInvitationUncheckedCreateWithoutInviteeInput> | TripInvitationCreateWithoutInviteeInput[] | TripInvitationUncheckedCreateWithoutInviteeInput[]
    connectOrCreate?: TripInvitationCreateOrConnectWithoutInviteeInput | TripInvitationCreateOrConnectWithoutInviteeInput[]
    createMany?: TripInvitationCreateManyInviteeInputEnvelope
    connect?: TripInvitationWhereUniqueInput | TripInvitationWhereUniqueInput[]
  }

  export type RatingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput> | RatingCreateWithoutUserInput[] | RatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutUserInput | RatingCreateOrConnectWithoutUserInput[]
    createMany?: RatingCreateManyUserInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumAuthProviderFieldUpdateOperationsInput = {
    set?: $Enums.AuthProvider
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TripUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<TripCreateWithoutOwnerInput, TripUncheckedCreateWithoutOwnerInput> | TripCreateWithoutOwnerInput[] | TripUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TripCreateOrConnectWithoutOwnerInput | TripCreateOrConnectWithoutOwnerInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutOwnerInput | TripUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: TripCreateManyOwnerInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutOwnerInput | TripUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: TripUpdateManyWithWhereWithoutOwnerInput | TripUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type TripMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<TripMemberCreateWithoutUserInput, TripMemberUncheckedCreateWithoutUserInput> | TripMemberCreateWithoutUserInput[] | TripMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripMemberCreateOrConnectWithoutUserInput | TripMemberCreateOrConnectWithoutUserInput[]
    upsert?: TripMemberUpsertWithWhereUniqueWithoutUserInput | TripMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TripMemberCreateManyUserInputEnvelope
    set?: TripMemberWhereUniqueInput | TripMemberWhereUniqueInput[]
    disconnect?: TripMemberWhereUniqueInput | TripMemberWhereUniqueInput[]
    delete?: TripMemberWhereUniqueInput | TripMemberWhereUniqueInput[]
    connect?: TripMemberWhereUniqueInput | TripMemberWhereUniqueInput[]
    update?: TripMemberUpdateWithWhereUniqueWithoutUserInput | TripMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TripMemberUpdateManyWithWhereWithoutUserInput | TripMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TripMemberScalarWhereInput | TripMemberScalarWhereInput[]
  }

  export type TripInvitationUpdateManyWithoutInviterNestedInput = {
    create?: XOR<TripInvitationCreateWithoutInviterInput, TripInvitationUncheckedCreateWithoutInviterInput> | TripInvitationCreateWithoutInviterInput[] | TripInvitationUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: TripInvitationCreateOrConnectWithoutInviterInput | TripInvitationCreateOrConnectWithoutInviterInput[]
    upsert?: TripInvitationUpsertWithWhereUniqueWithoutInviterInput | TripInvitationUpsertWithWhereUniqueWithoutInviterInput[]
    createMany?: TripInvitationCreateManyInviterInputEnvelope
    set?: TripInvitationWhereUniqueInput | TripInvitationWhereUniqueInput[]
    disconnect?: TripInvitationWhereUniqueInput | TripInvitationWhereUniqueInput[]
    delete?: TripInvitationWhereUniqueInput | TripInvitationWhereUniqueInput[]
    connect?: TripInvitationWhereUniqueInput | TripInvitationWhereUniqueInput[]
    update?: TripInvitationUpdateWithWhereUniqueWithoutInviterInput | TripInvitationUpdateWithWhereUniqueWithoutInviterInput[]
    updateMany?: TripInvitationUpdateManyWithWhereWithoutInviterInput | TripInvitationUpdateManyWithWhereWithoutInviterInput[]
    deleteMany?: TripInvitationScalarWhereInput | TripInvitationScalarWhereInput[]
  }

  export type TripInvitationUpdateManyWithoutInviteeNestedInput = {
    create?: XOR<TripInvitationCreateWithoutInviteeInput, TripInvitationUncheckedCreateWithoutInviteeInput> | TripInvitationCreateWithoutInviteeInput[] | TripInvitationUncheckedCreateWithoutInviteeInput[]
    connectOrCreate?: TripInvitationCreateOrConnectWithoutInviteeInput | TripInvitationCreateOrConnectWithoutInviteeInput[]
    upsert?: TripInvitationUpsertWithWhereUniqueWithoutInviteeInput | TripInvitationUpsertWithWhereUniqueWithoutInviteeInput[]
    createMany?: TripInvitationCreateManyInviteeInputEnvelope
    set?: TripInvitationWhereUniqueInput | TripInvitationWhereUniqueInput[]
    disconnect?: TripInvitationWhereUniqueInput | TripInvitationWhereUniqueInput[]
    delete?: TripInvitationWhereUniqueInput | TripInvitationWhereUniqueInput[]
    connect?: TripInvitationWhereUniqueInput | TripInvitationWhereUniqueInput[]
    update?: TripInvitationUpdateWithWhereUniqueWithoutInviteeInput | TripInvitationUpdateWithWhereUniqueWithoutInviteeInput[]
    updateMany?: TripInvitationUpdateManyWithWhereWithoutInviteeInput | TripInvitationUpdateManyWithWhereWithoutInviteeInput[]
    deleteMany?: TripInvitationScalarWhereInput | TripInvitationScalarWhereInput[]
  }

  export type RatingUpdateManyWithoutUserNestedInput = {
    create?: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput> | RatingCreateWithoutUserInput[] | RatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutUserInput | RatingCreateOrConnectWithoutUserInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutUserInput | RatingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RatingCreateManyUserInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutUserInput | RatingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutUserInput | RatingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type TripUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<TripCreateWithoutOwnerInput, TripUncheckedCreateWithoutOwnerInput> | TripCreateWithoutOwnerInput[] | TripUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TripCreateOrConnectWithoutOwnerInput | TripCreateOrConnectWithoutOwnerInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutOwnerInput | TripUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: TripCreateManyOwnerInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutOwnerInput | TripUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: TripUpdateManyWithWhereWithoutOwnerInput | TripUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type TripMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TripMemberCreateWithoutUserInput, TripMemberUncheckedCreateWithoutUserInput> | TripMemberCreateWithoutUserInput[] | TripMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripMemberCreateOrConnectWithoutUserInput | TripMemberCreateOrConnectWithoutUserInput[]
    upsert?: TripMemberUpsertWithWhereUniqueWithoutUserInput | TripMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TripMemberCreateManyUserInputEnvelope
    set?: TripMemberWhereUniqueInput | TripMemberWhereUniqueInput[]
    disconnect?: TripMemberWhereUniqueInput | TripMemberWhereUniqueInput[]
    delete?: TripMemberWhereUniqueInput | TripMemberWhereUniqueInput[]
    connect?: TripMemberWhereUniqueInput | TripMemberWhereUniqueInput[]
    update?: TripMemberUpdateWithWhereUniqueWithoutUserInput | TripMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TripMemberUpdateManyWithWhereWithoutUserInput | TripMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TripMemberScalarWhereInput | TripMemberScalarWhereInput[]
  }

  export type TripInvitationUncheckedUpdateManyWithoutInviterNestedInput = {
    create?: XOR<TripInvitationCreateWithoutInviterInput, TripInvitationUncheckedCreateWithoutInviterInput> | TripInvitationCreateWithoutInviterInput[] | TripInvitationUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: TripInvitationCreateOrConnectWithoutInviterInput | TripInvitationCreateOrConnectWithoutInviterInput[]
    upsert?: TripInvitationUpsertWithWhereUniqueWithoutInviterInput | TripInvitationUpsertWithWhereUniqueWithoutInviterInput[]
    createMany?: TripInvitationCreateManyInviterInputEnvelope
    set?: TripInvitationWhereUniqueInput | TripInvitationWhereUniqueInput[]
    disconnect?: TripInvitationWhereUniqueInput | TripInvitationWhereUniqueInput[]
    delete?: TripInvitationWhereUniqueInput | TripInvitationWhereUniqueInput[]
    connect?: TripInvitationWhereUniqueInput | TripInvitationWhereUniqueInput[]
    update?: TripInvitationUpdateWithWhereUniqueWithoutInviterInput | TripInvitationUpdateWithWhereUniqueWithoutInviterInput[]
    updateMany?: TripInvitationUpdateManyWithWhereWithoutInviterInput | TripInvitationUpdateManyWithWhereWithoutInviterInput[]
    deleteMany?: TripInvitationScalarWhereInput | TripInvitationScalarWhereInput[]
  }

  export type TripInvitationUncheckedUpdateManyWithoutInviteeNestedInput = {
    create?: XOR<TripInvitationCreateWithoutInviteeInput, TripInvitationUncheckedCreateWithoutInviteeInput> | TripInvitationCreateWithoutInviteeInput[] | TripInvitationUncheckedCreateWithoutInviteeInput[]
    connectOrCreate?: TripInvitationCreateOrConnectWithoutInviteeInput | TripInvitationCreateOrConnectWithoutInviteeInput[]
    upsert?: TripInvitationUpsertWithWhereUniqueWithoutInviteeInput | TripInvitationUpsertWithWhereUniqueWithoutInviteeInput[]
    createMany?: TripInvitationCreateManyInviteeInputEnvelope
    set?: TripInvitationWhereUniqueInput | TripInvitationWhereUniqueInput[]
    disconnect?: TripInvitationWhereUniqueInput | TripInvitationWhereUniqueInput[]
    delete?: TripInvitationWhereUniqueInput | TripInvitationWhereUniqueInput[]
    connect?: TripInvitationWhereUniqueInput | TripInvitationWhereUniqueInput[]
    update?: TripInvitationUpdateWithWhereUniqueWithoutInviteeInput | TripInvitationUpdateWithWhereUniqueWithoutInviteeInput[]
    updateMany?: TripInvitationUpdateManyWithWhereWithoutInviteeInput | TripInvitationUpdateManyWithWhereWithoutInviteeInput[]
    deleteMany?: TripInvitationScalarWhereInput | TripInvitationScalarWhereInput[]
  }

  export type RatingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput> | RatingCreateWithoutUserInput[] | RatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutUserInput | RatingCreateOrConnectWithoutUserInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutUserInput | RatingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RatingCreateManyUserInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutUserInput | RatingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutUserInput | RatingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOwnedTripsInput = {
    create?: XOR<UserCreateWithoutOwnedTripsInput, UserUncheckedCreateWithoutOwnedTripsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedTripsInput
    connect?: UserWhereUniqueInput
  }

  export type TripMemberCreateNestedManyWithoutTripInput = {
    create?: XOR<TripMemberCreateWithoutTripInput, TripMemberUncheckedCreateWithoutTripInput> | TripMemberCreateWithoutTripInput[] | TripMemberUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripMemberCreateOrConnectWithoutTripInput | TripMemberCreateOrConnectWithoutTripInput[]
    createMany?: TripMemberCreateManyTripInputEnvelope
    connect?: TripMemberWhereUniqueInput | TripMemberWhereUniqueInput[]
  }

  export type TripDayCreateNestedManyWithoutTripInput = {
    create?: XOR<TripDayCreateWithoutTripInput, TripDayUncheckedCreateWithoutTripInput> | TripDayCreateWithoutTripInput[] | TripDayUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripDayCreateOrConnectWithoutTripInput | TripDayCreateOrConnectWithoutTripInput[]
    createMany?: TripDayCreateManyTripInputEnvelope
    connect?: TripDayWhereUniqueInput | TripDayWhereUniqueInput[]
  }

  export type TripInvitationCreateNestedManyWithoutTripInput = {
    create?: XOR<TripInvitationCreateWithoutTripInput, TripInvitationUncheckedCreateWithoutTripInput> | TripInvitationCreateWithoutTripInput[] | TripInvitationUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripInvitationCreateOrConnectWithoutTripInput | TripInvitationCreateOrConnectWithoutTripInput[]
    createMany?: TripInvitationCreateManyTripInputEnvelope
    connect?: TripInvitationWhereUniqueInput | TripInvitationWhereUniqueInput[]
  }

  export type RatingCreateNestedManyWithoutTripInput = {
    create?: XOR<RatingCreateWithoutTripInput, RatingUncheckedCreateWithoutTripInput> | RatingCreateWithoutTripInput[] | RatingUncheckedCreateWithoutTripInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutTripInput | RatingCreateOrConnectWithoutTripInput[]
    createMany?: RatingCreateManyTripInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type TripMemberUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<TripMemberCreateWithoutTripInput, TripMemberUncheckedCreateWithoutTripInput> | TripMemberCreateWithoutTripInput[] | TripMemberUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripMemberCreateOrConnectWithoutTripInput | TripMemberCreateOrConnectWithoutTripInput[]
    createMany?: TripMemberCreateManyTripInputEnvelope
    connect?: TripMemberWhereUniqueInput | TripMemberWhereUniqueInput[]
  }

  export type TripDayUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<TripDayCreateWithoutTripInput, TripDayUncheckedCreateWithoutTripInput> | TripDayCreateWithoutTripInput[] | TripDayUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripDayCreateOrConnectWithoutTripInput | TripDayCreateOrConnectWithoutTripInput[]
    createMany?: TripDayCreateManyTripInputEnvelope
    connect?: TripDayWhereUniqueInput | TripDayWhereUniqueInput[]
  }

  export type TripInvitationUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<TripInvitationCreateWithoutTripInput, TripInvitationUncheckedCreateWithoutTripInput> | TripInvitationCreateWithoutTripInput[] | TripInvitationUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripInvitationCreateOrConnectWithoutTripInput | TripInvitationCreateOrConnectWithoutTripInput[]
    createMany?: TripInvitationCreateManyTripInputEnvelope
    connect?: TripInvitationWhereUniqueInput | TripInvitationWhereUniqueInput[]
  }

  export type RatingUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<RatingCreateWithoutTripInput, RatingUncheckedCreateWithoutTripInput> | RatingCreateWithoutTripInput[] | RatingUncheckedCreateWithoutTripInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutTripInput | RatingCreateOrConnectWithoutTripInput[]
    createMany?: RatingCreateManyTripInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumTripStatusFieldUpdateOperationsInput = {
    set?: $Enums.TripStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutOwnedTripsNestedInput = {
    create?: XOR<UserCreateWithoutOwnedTripsInput, UserUncheckedCreateWithoutOwnedTripsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedTripsInput
    upsert?: UserUpsertWithoutOwnedTripsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnedTripsInput, UserUpdateWithoutOwnedTripsInput>, UserUncheckedUpdateWithoutOwnedTripsInput>
  }

  export type TripMemberUpdateManyWithoutTripNestedInput = {
    create?: XOR<TripMemberCreateWithoutTripInput, TripMemberUncheckedCreateWithoutTripInput> | TripMemberCreateWithoutTripInput[] | TripMemberUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripMemberCreateOrConnectWithoutTripInput | TripMemberCreateOrConnectWithoutTripInput[]
    upsert?: TripMemberUpsertWithWhereUniqueWithoutTripInput | TripMemberUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: TripMemberCreateManyTripInputEnvelope
    set?: TripMemberWhereUniqueInput | TripMemberWhereUniqueInput[]
    disconnect?: TripMemberWhereUniqueInput | TripMemberWhereUniqueInput[]
    delete?: TripMemberWhereUniqueInput | TripMemberWhereUniqueInput[]
    connect?: TripMemberWhereUniqueInput | TripMemberWhereUniqueInput[]
    update?: TripMemberUpdateWithWhereUniqueWithoutTripInput | TripMemberUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: TripMemberUpdateManyWithWhereWithoutTripInput | TripMemberUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: TripMemberScalarWhereInput | TripMemberScalarWhereInput[]
  }

  export type TripDayUpdateManyWithoutTripNestedInput = {
    create?: XOR<TripDayCreateWithoutTripInput, TripDayUncheckedCreateWithoutTripInput> | TripDayCreateWithoutTripInput[] | TripDayUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripDayCreateOrConnectWithoutTripInput | TripDayCreateOrConnectWithoutTripInput[]
    upsert?: TripDayUpsertWithWhereUniqueWithoutTripInput | TripDayUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: TripDayCreateManyTripInputEnvelope
    set?: TripDayWhereUniqueInput | TripDayWhereUniqueInput[]
    disconnect?: TripDayWhereUniqueInput | TripDayWhereUniqueInput[]
    delete?: TripDayWhereUniqueInput | TripDayWhereUniqueInput[]
    connect?: TripDayWhereUniqueInput | TripDayWhereUniqueInput[]
    update?: TripDayUpdateWithWhereUniqueWithoutTripInput | TripDayUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: TripDayUpdateManyWithWhereWithoutTripInput | TripDayUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: TripDayScalarWhereInput | TripDayScalarWhereInput[]
  }

  export type TripInvitationUpdateManyWithoutTripNestedInput = {
    create?: XOR<TripInvitationCreateWithoutTripInput, TripInvitationUncheckedCreateWithoutTripInput> | TripInvitationCreateWithoutTripInput[] | TripInvitationUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripInvitationCreateOrConnectWithoutTripInput | TripInvitationCreateOrConnectWithoutTripInput[]
    upsert?: TripInvitationUpsertWithWhereUniqueWithoutTripInput | TripInvitationUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: TripInvitationCreateManyTripInputEnvelope
    set?: TripInvitationWhereUniqueInput | TripInvitationWhereUniqueInput[]
    disconnect?: TripInvitationWhereUniqueInput | TripInvitationWhereUniqueInput[]
    delete?: TripInvitationWhereUniqueInput | TripInvitationWhereUniqueInput[]
    connect?: TripInvitationWhereUniqueInput | TripInvitationWhereUniqueInput[]
    update?: TripInvitationUpdateWithWhereUniqueWithoutTripInput | TripInvitationUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: TripInvitationUpdateManyWithWhereWithoutTripInput | TripInvitationUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: TripInvitationScalarWhereInput | TripInvitationScalarWhereInput[]
  }

  export type RatingUpdateManyWithoutTripNestedInput = {
    create?: XOR<RatingCreateWithoutTripInput, RatingUncheckedCreateWithoutTripInput> | RatingCreateWithoutTripInput[] | RatingUncheckedCreateWithoutTripInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutTripInput | RatingCreateOrConnectWithoutTripInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutTripInput | RatingUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: RatingCreateManyTripInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutTripInput | RatingUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutTripInput | RatingUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type TripMemberUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<TripMemberCreateWithoutTripInput, TripMemberUncheckedCreateWithoutTripInput> | TripMemberCreateWithoutTripInput[] | TripMemberUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripMemberCreateOrConnectWithoutTripInput | TripMemberCreateOrConnectWithoutTripInput[]
    upsert?: TripMemberUpsertWithWhereUniqueWithoutTripInput | TripMemberUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: TripMemberCreateManyTripInputEnvelope
    set?: TripMemberWhereUniqueInput | TripMemberWhereUniqueInput[]
    disconnect?: TripMemberWhereUniqueInput | TripMemberWhereUniqueInput[]
    delete?: TripMemberWhereUniqueInput | TripMemberWhereUniqueInput[]
    connect?: TripMemberWhereUniqueInput | TripMemberWhereUniqueInput[]
    update?: TripMemberUpdateWithWhereUniqueWithoutTripInput | TripMemberUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: TripMemberUpdateManyWithWhereWithoutTripInput | TripMemberUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: TripMemberScalarWhereInput | TripMemberScalarWhereInput[]
  }

  export type TripDayUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<TripDayCreateWithoutTripInput, TripDayUncheckedCreateWithoutTripInput> | TripDayCreateWithoutTripInput[] | TripDayUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripDayCreateOrConnectWithoutTripInput | TripDayCreateOrConnectWithoutTripInput[]
    upsert?: TripDayUpsertWithWhereUniqueWithoutTripInput | TripDayUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: TripDayCreateManyTripInputEnvelope
    set?: TripDayWhereUniqueInput | TripDayWhereUniqueInput[]
    disconnect?: TripDayWhereUniqueInput | TripDayWhereUniqueInput[]
    delete?: TripDayWhereUniqueInput | TripDayWhereUniqueInput[]
    connect?: TripDayWhereUniqueInput | TripDayWhereUniqueInput[]
    update?: TripDayUpdateWithWhereUniqueWithoutTripInput | TripDayUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: TripDayUpdateManyWithWhereWithoutTripInput | TripDayUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: TripDayScalarWhereInput | TripDayScalarWhereInput[]
  }

  export type TripInvitationUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<TripInvitationCreateWithoutTripInput, TripInvitationUncheckedCreateWithoutTripInput> | TripInvitationCreateWithoutTripInput[] | TripInvitationUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripInvitationCreateOrConnectWithoutTripInput | TripInvitationCreateOrConnectWithoutTripInput[]
    upsert?: TripInvitationUpsertWithWhereUniqueWithoutTripInput | TripInvitationUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: TripInvitationCreateManyTripInputEnvelope
    set?: TripInvitationWhereUniqueInput | TripInvitationWhereUniqueInput[]
    disconnect?: TripInvitationWhereUniqueInput | TripInvitationWhereUniqueInput[]
    delete?: TripInvitationWhereUniqueInput | TripInvitationWhereUniqueInput[]
    connect?: TripInvitationWhereUniqueInput | TripInvitationWhereUniqueInput[]
    update?: TripInvitationUpdateWithWhereUniqueWithoutTripInput | TripInvitationUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: TripInvitationUpdateManyWithWhereWithoutTripInput | TripInvitationUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: TripInvitationScalarWhereInput | TripInvitationScalarWhereInput[]
  }

  export type RatingUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<RatingCreateWithoutTripInput, RatingUncheckedCreateWithoutTripInput> | RatingCreateWithoutTripInput[] | RatingUncheckedCreateWithoutTripInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutTripInput | RatingCreateOrConnectWithoutTripInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutTripInput | RatingUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: RatingCreateManyTripInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutTripInput | RatingUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutTripInput | RatingUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type TripCreateNestedOneWithoutMembersInput = {
    create?: XOR<TripCreateWithoutMembersInput, TripUncheckedCreateWithoutMembersInput>
    connectOrCreate?: TripCreateOrConnectWithoutMembersInput
    connect?: TripWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTripMembersInput = {
    create?: XOR<UserCreateWithoutTripMembersInput, UserUncheckedCreateWithoutTripMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutTripMembersInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTripMemberRoleFieldUpdateOperationsInput = {
    set?: $Enums.TripMemberRole
  }

  export type TripUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<TripCreateWithoutMembersInput, TripUncheckedCreateWithoutMembersInput>
    connectOrCreate?: TripCreateOrConnectWithoutMembersInput
    upsert?: TripUpsertWithoutMembersInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutMembersInput, TripUpdateWithoutMembersInput>, TripUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateOneRequiredWithoutTripMembersNestedInput = {
    create?: XOR<UserCreateWithoutTripMembersInput, UserUncheckedCreateWithoutTripMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutTripMembersInput
    upsert?: UserUpsertWithoutTripMembersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTripMembersInput, UserUpdateWithoutTripMembersInput>, UserUncheckedUpdateWithoutTripMembersInput>
  }

  export type TripCreateNestedOneWithoutDaysInput = {
    create?: XOR<TripCreateWithoutDaysInput, TripUncheckedCreateWithoutDaysInput>
    connectOrCreate?: TripCreateOrConnectWithoutDaysInput
    connect?: TripWhereUniqueInput
  }

  export type ItineraryItemCreateNestedManyWithoutTripDayInput = {
    create?: XOR<ItineraryItemCreateWithoutTripDayInput, ItineraryItemUncheckedCreateWithoutTripDayInput> | ItineraryItemCreateWithoutTripDayInput[] | ItineraryItemUncheckedCreateWithoutTripDayInput[]
    connectOrCreate?: ItineraryItemCreateOrConnectWithoutTripDayInput | ItineraryItemCreateOrConnectWithoutTripDayInput[]
    createMany?: ItineraryItemCreateManyTripDayInputEnvelope
    connect?: ItineraryItemWhereUniqueInput | ItineraryItemWhereUniqueInput[]
  }

  export type ItineraryItemUncheckedCreateNestedManyWithoutTripDayInput = {
    create?: XOR<ItineraryItemCreateWithoutTripDayInput, ItineraryItemUncheckedCreateWithoutTripDayInput> | ItineraryItemCreateWithoutTripDayInput[] | ItineraryItemUncheckedCreateWithoutTripDayInput[]
    connectOrCreate?: ItineraryItemCreateOrConnectWithoutTripDayInput | ItineraryItemCreateOrConnectWithoutTripDayInput[]
    createMany?: ItineraryItemCreateManyTripDayInputEnvelope
    connect?: ItineraryItemWhereUniqueInput | ItineraryItemWhereUniqueInput[]
  }

  export type TripUpdateOneRequiredWithoutDaysNestedInput = {
    create?: XOR<TripCreateWithoutDaysInput, TripUncheckedCreateWithoutDaysInput>
    connectOrCreate?: TripCreateOrConnectWithoutDaysInput
    upsert?: TripUpsertWithoutDaysInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutDaysInput, TripUpdateWithoutDaysInput>, TripUncheckedUpdateWithoutDaysInput>
  }

  export type ItineraryItemUpdateManyWithoutTripDayNestedInput = {
    create?: XOR<ItineraryItemCreateWithoutTripDayInput, ItineraryItemUncheckedCreateWithoutTripDayInput> | ItineraryItemCreateWithoutTripDayInput[] | ItineraryItemUncheckedCreateWithoutTripDayInput[]
    connectOrCreate?: ItineraryItemCreateOrConnectWithoutTripDayInput | ItineraryItemCreateOrConnectWithoutTripDayInput[]
    upsert?: ItineraryItemUpsertWithWhereUniqueWithoutTripDayInput | ItineraryItemUpsertWithWhereUniqueWithoutTripDayInput[]
    createMany?: ItineraryItemCreateManyTripDayInputEnvelope
    set?: ItineraryItemWhereUniqueInput | ItineraryItemWhereUniqueInput[]
    disconnect?: ItineraryItemWhereUniqueInput | ItineraryItemWhereUniqueInput[]
    delete?: ItineraryItemWhereUniqueInput | ItineraryItemWhereUniqueInput[]
    connect?: ItineraryItemWhereUniqueInput | ItineraryItemWhereUniqueInput[]
    update?: ItineraryItemUpdateWithWhereUniqueWithoutTripDayInput | ItineraryItemUpdateWithWhereUniqueWithoutTripDayInput[]
    updateMany?: ItineraryItemUpdateManyWithWhereWithoutTripDayInput | ItineraryItemUpdateManyWithWhereWithoutTripDayInput[]
    deleteMany?: ItineraryItemScalarWhereInput | ItineraryItemScalarWhereInput[]
  }

  export type ItineraryItemUncheckedUpdateManyWithoutTripDayNestedInput = {
    create?: XOR<ItineraryItemCreateWithoutTripDayInput, ItineraryItemUncheckedCreateWithoutTripDayInput> | ItineraryItemCreateWithoutTripDayInput[] | ItineraryItemUncheckedCreateWithoutTripDayInput[]
    connectOrCreate?: ItineraryItemCreateOrConnectWithoutTripDayInput | ItineraryItemCreateOrConnectWithoutTripDayInput[]
    upsert?: ItineraryItemUpsertWithWhereUniqueWithoutTripDayInput | ItineraryItemUpsertWithWhereUniqueWithoutTripDayInput[]
    createMany?: ItineraryItemCreateManyTripDayInputEnvelope
    set?: ItineraryItemWhereUniqueInput | ItineraryItemWhereUniqueInput[]
    disconnect?: ItineraryItemWhereUniqueInput | ItineraryItemWhereUniqueInput[]
    delete?: ItineraryItemWhereUniqueInput | ItineraryItemWhereUniqueInput[]
    connect?: ItineraryItemWhereUniqueInput | ItineraryItemWhereUniqueInput[]
    update?: ItineraryItemUpdateWithWhereUniqueWithoutTripDayInput | ItineraryItemUpdateWithWhereUniqueWithoutTripDayInput[]
    updateMany?: ItineraryItemUpdateManyWithWhereWithoutTripDayInput | ItineraryItemUpdateManyWithWhereWithoutTripDayInput[]
    deleteMany?: ItineraryItemScalarWhereInput | ItineraryItemScalarWhereInput[]
  }

  export type TripDayCreateNestedOneWithoutItemsInput = {
    create?: XOR<TripDayCreateWithoutItemsInput, TripDayUncheckedCreateWithoutItemsInput>
    connectOrCreate?: TripDayCreateOrConnectWithoutItemsInput
    connect?: TripDayWhereUniqueInput
  }

  export type TripDayUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<TripDayCreateWithoutItemsInput, TripDayUncheckedCreateWithoutItemsInput>
    connectOrCreate?: TripDayCreateOrConnectWithoutItemsInput
    upsert?: TripDayUpsertWithoutItemsInput
    connect?: TripDayWhereUniqueInput
    update?: XOR<XOR<TripDayUpdateToOneWithWhereWithoutItemsInput, TripDayUpdateWithoutItemsInput>, TripDayUncheckedUpdateWithoutItemsInput>
  }

  export type TripCreateNestedOneWithoutInvitationsInput = {
    create?: XOR<TripCreateWithoutInvitationsInput, TripUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: TripCreateOrConnectWithoutInvitationsInput
    connect?: TripWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutInvitationsSentInput = {
    create?: XOR<UserCreateWithoutInvitationsSentInput, UserUncheckedCreateWithoutInvitationsSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvitationsSentInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutInvitationsRecvInput = {
    create?: XOR<UserCreateWithoutInvitationsRecvInput, UserUncheckedCreateWithoutInvitationsRecvInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvitationsRecvInput
    connect?: UserWhereUniqueInput
  }

  export type EnumInvitationStatusFieldUpdateOperationsInput = {
    set?: $Enums.InvitationStatus
  }

  export type TripUpdateOneRequiredWithoutInvitationsNestedInput = {
    create?: XOR<TripCreateWithoutInvitationsInput, TripUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: TripCreateOrConnectWithoutInvitationsInput
    upsert?: TripUpsertWithoutInvitationsInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutInvitationsInput, TripUpdateWithoutInvitationsInput>, TripUncheckedUpdateWithoutInvitationsInput>
  }

  export type UserUpdateOneRequiredWithoutInvitationsSentNestedInput = {
    create?: XOR<UserCreateWithoutInvitationsSentInput, UserUncheckedCreateWithoutInvitationsSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvitationsSentInput
    upsert?: UserUpsertWithoutInvitationsSentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInvitationsSentInput, UserUpdateWithoutInvitationsSentInput>, UserUncheckedUpdateWithoutInvitationsSentInput>
  }

  export type UserUpdateOneWithoutInvitationsRecvNestedInput = {
    create?: XOR<UserCreateWithoutInvitationsRecvInput, UserUncheckedCreateWithoutInvitationsRecvInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvitationsRecvInput
    upsert?: UserUpsertWithoutInvitationsRecvInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInvitationsRecvInput, UserUpdateWithoutInvitationsRecvInput>, UserUncheckedUpdateWithoutInvitationsRecvInput>
  }

  export type UserCreateNestedOneWithoutRatingsInput = {
    create?: XOR<UserCreateWithoutRatingsInput, UserUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRatingsInput
    connect?: UserWhereUniqueInput
  }

  export type TripCreateNestedOneWithoutRatingsInput = {
    create?: XOR<TripCreateWithoutRatingsInput, TripUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: TripCreateOrConnectWithoutRatingsInput
    connect?: TripWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: XOR<UserCreateWithoutRatingsInput, UserUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRatingsInput
    upsert?: UserUpsertWithoutRatingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRatingsInput, UserUpdateWithoutRatingsInput>, UserUncheckedUpdateWithoutRatingsInput>
  }

  export type TripUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: XOR<TripCreateWithoutRatingsInput, TripUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: TripCreateOrConnectWithoutRatingsInput
    upsert?: TripUpsertWithoutRatingsInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutRatingsInput, TripUpdateWithoutRatingsInput>, TripUncheckedUpdateWithoutRatingsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumAuthProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthProviderFilter<$PrismaModel> | $Enums.AuthProvider
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel> | $Enums.AuthProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthProviderFilter<$PrismaModel>
    _max?: NestedEnumAuthProviderFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumTripStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TripStatus | EnumTripStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TripStatus[] | ListEnumTripStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TripStatus[] | ListEnumTripStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTripStatusFilter<$PrismaModel> | $Enums.TripStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumTripStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TripStatus | EnumTripStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TripStatus[] | ListEnumTripStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TripStatus[] | ListEnumTripStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTripStatusWithAggregatesFilter<$PrismaModel> | $Enums.TripStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTripStatusFilter<$PrismaModel>
    _max?: NestedEnumTripStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumTripMemberRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.TripMemberRole | EnumTripMemberRoleFieldRefInput<$PrismaModel>
    in?: $Enums.TripMemberRole[] | ListEnumTripMemberRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.TripMemberRole[] | ListEnumTripMemberRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumTripMemberRoleFilter<$PrismaModel> | $Enums.TripMemberRole
  }

  export type NestedEnumTripMemberRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TripMemberRole | EnumTripMemberRoleFieldRefInput<$PrismaModel>
    in?: $Enums.TripMemberRole[] | ListEnumTripMemberRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.TripMemberRole[] | ListEnumTripMemberRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumTripMemberRoleWithAggregatesFilter<$PrismaModel> | $Enums.TripMemberRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTripMemberRoleFilter<$PrismaModel>
    _max?: NestedEnumTripMemberRoleFilter<$PrismaModel>
  }

  export type NestedEnumInvitationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationStatus | EnumInvitationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvitationStatusFilter<$PrismaModel> | $Enums.InvitationStatus
  }

  export type NestedEnumInvitationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationStatus | EnumInvitationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvitationStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvitationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvitationStatusFilter<$PrismaModel>
    _max?: NestedEnumInvitationStatusFilter<$PrismaModel>
  }

  export type TripCreateWithoutOwnerInput = {
    id?: string
    title: string
    description?: string | null
    destination: string
    destinationCountry?: string | null
    destinationCity?: string | null
    budgetTotal?: Decimal | DecimalJsLike | number | string | null
    travelerCount: number
    startDate: Date | string
    endDate: Date | string
    timezone?: string
    coverImageUrl?: string | null
    status?: $Enums.TripStatus
    endedAt?: Date | string | null
    endedByUserId?: string | null
    isTemplatePublished?: boolean
    templatePublishedAt?: Date | string | null
    templateUseCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: TripMemberCreateNestedManyWithoutTripInput
    days?: TripDayCreateNestedManyWithoutTripInput
    invitations?: TripInvitationCreateNestedManyWithoutTripInput
    ratings?: RatingCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutOwnerInput = {
    id?: string
    title: string
    description?: string | null
    destination: string
    destinationCountry?: string | null
    destinationCity?: string | null
    budgetTotal?: Decimal | DecimalJsLike | number | string | null
    travelerCount: number
    startDate: Date | string
    endDate: Date | string
    timezone?: string
    coverImageUrl?: string | null
    status?: $Enums.TripStatus
    endedAt?: Date | string | null
    endedByUserId?: string | null
    isTemplatePublished?: boolean
    templatePublishedAt?: Date | string | null
    templateUseCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: TripMemberUncheckedCreateNestedManyWithoutTripInput
    days?: TripDayUncheckedCreateNestedManyWithoutTripInput
    invitations?: TripInvitationUncheckedCreateNestedManyWithoutTripInput
    ratings?: RatingUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutOwnerInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutOwnerInput, TripUncheckedCreateWithoutOwnerInput>
  }

  export type TripCreateManyOwnerInputEnvelope = {
    data: TripCreateManyOwnerInput | TripCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type TripMemberCreateWithoutUserInput = {
    id?: string
    role?: $Enums.TripMemberRole
    joinedAt?: Date | string
    addedByUserId?: string | null
    trip: TripCreateNestedOneWithoutMembersInput
  }

  export type TripMemberUncheckedCreateWithoutUserInput = {
    id?: string
    tripId: string
    role?: $Enums.TripMemberRole
    joinedAt?: Date | string
    addedByUserId?: string | null
  }

  export type TripMemberCreateOrConnectWithoutUserInput = {
    where: TripMemberWhereUniqueInput
    create: XOR<TripMemberCreateWithoutUserInput, TripMemberUncheckedCreateWithoutUserInput>
  }

  export type TripMemberCreateManyUserInputEnvelope = {
    data: TripMemberCreateManyUserInput | TripMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TripInvitationCreateWithoutInviterInput = {
    id?: string
    inviteeEmail?: string | null
    message?: string | null
    status?: $Enums.InvitationStatus
    expiresAt?: Date | string | null
    respondedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trip: TripCreateNestedOneWithoutInvitationsInput
    invitee?: UserCreateNestedOneWithoutInvitationsRecvInput
  }

  export type TripInvitationUncheckedCreateWithoutInviterInput = {
    id?: string
    tripId: string
    inviteeUserId?: string | null
    inviteeEmail?: string | null
    message?: string | null
    status?: $Enums.InvitationStatus
    expiresAt?: Date | string | null
    respondedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripInvitationCreateOrConnectWithoutInviterInput = {
    where: TripInvitationWhereUniqueInput
    create: XOR<TripInvitationCreateWithoutInviterInput, TripInvitationUncheckedCreateWithoutInviterInput>
  }

  export type TripInvitationCreateManyInviterInputEnvelope = {
    data: TripInvitationCreateManyInviterInput | TripInvitationCreateManyInviterInput[]
    skipDuplicates?: boolean
  }

  export type TripInvitationCreateWithoutInviteeInput = {
    id?: string
    inviteeEmail?: string | null
    message?: string | null
    status?: $Enums.InvitationStatus
    expiresAt?: Date | string | null
    respondedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trip: TripCreateNestedOneWithoutInvitationsInput
    inviter: UserCreateNestedOneWithoutInvitationsSentInput
  }

  export type TripInvitationUncheckedCreateWithoutInviteeInput = {
    id?: string
    tripId: string
    inviterId: string
    inviteeEmail?: string | null
    message?: string | null
    status?: $Enums.InvitationStatus
    expiresAt?: Date | string | null
    respondedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripInvitationCreateOrConnectWithoutInviteeInput = {
    where: TripInvitationWhereUniqueInput
    create: XOR<TripInvitationCreateWithoutInviteeInput, TripInvitationUncheckedCreateWithoutInviteeInput>
  }

  export type TripInvitationCreateManyInviteeInputEnvelope = {
    data: TripInvitationCreateManyInviteeInput | TripInvitationCreateManyInviteeInput[]
    skipDuplicates?: boolean
  }

  export type RatingCreateWithoutUserInput = {
    id?: string
    score: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trip: TripCreateNestedOneWithoutRatingsInput
  }

  export type RatingUncheckedCreateWithoutUserInput = {
    id?: string
    tripId: string
    score: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RatingCreateOrConnectWithoutUserInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput>
  }

  export type RatingCreateManyUserInputEnvelope = {
    data: RatingCreateManyUserInput | RatingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TripUpsertWithWhereUniqueWithoutOwnerInput = {
    where: TripWhereUniqueInput
    update: XOR<TripUpdateWithoutOwnerInput, TripUncheckedUpdateWithoutOwnerInput>
    create: XOR<TripCreateWithoutOwnerInput, TripUncheckedCreateWithoutOwnerInput>
  }

  export type TripUpdateWithWhereUniqueWithoutOwnerInput = {
    where: TripWhereUniqueInput
    data: XOR<TripUpdateWithoutOwnerInput, TripUncheckedUpdateWithoutOwnerInput>
  }

  export type TripUpdateManyWithWhereWithoutOwnerInput = {
    where: TripScalarWhereInput
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyWithoutOwnerInput>
  }

  export type TripScalarWhereInput = {
    AND?: TripScalarWhereInput | TripScalarWhereInput[]
    OR?: TripScalarWhereInput[]
    NOT?: TripScalarWhereInput | TripScalarWhereInput[]
    id?: StringFilter<"Trip"> | string
    ownerId?: StringFilter<"Trip"> | string
    title?: StringFilter<"Trip"> | string
    description?: StringNullableFilter<"Trip"> | string | null
    destination?: StringFilter<"Trip"> | string
    destinationCountry?: StringNullableFilter<"Trip"> | string | null
    destinationCity?: StringNullableFilter<"Trip"> | string | null
    budgetTotal?: DecimalNullableFilter<"Trip"> | Decimal | DecimalJsLike | number | string | null
    travelerCount?: IntFilter<"Trip"> | number
    startDate?: DateTimeFilter<"Trip"> | Date | string
    endDate?: DateTimeFilter<"Trip"> | Date | string
    timezone?: StringFilter<"Trip"> | string
    coverImageUrl?: StringNullableFilter<"Trip"> | string | null
    status?: EnumTripStatusFilter<"Trip"> | $Enums.TripStatus
    endedAt?: DateTimeNullableFilter<"Trip"> | Date | string | null
    endedByUserId?: StringNullableFilter<"Trip"> | string | null
    isTemplatePublished?: BoolFilter<"Trip"> | boolean
    templatePublishedAt?: DateTimeNullableFilter<"Trip"> | Date | string | null
    templateUseCount?: IntFilter<"Trip"> | number
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    updatedAt?: DateTimeFilter<"Trip"> | Date | string
  }

  export type TripMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: TripMemberWhereUniqueInput
    update: XOR<TripMemberUpdateWithoutUserInput, TripMemberUncheckedUpdateWithoutUserInput>
    create: XOR<TripMemberCreateWithoutUserInput, TripMemberUncheckedCreateWithoutUserInput>
  }

  export type TripMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: TripMemberWhereUniqueInput
    data: XOR<TripMemberUpdateWithoutUserInput, TripMemberUncheckedUpdateWithoutUserInput>
  }

  export type TripMemberUpdateManyWithWhereWithoutUserInput = {
    where: TripMemberScalarWhereInput
    data: XOR<TripMemberUpdateManyMutationInput, TripMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type TripMemberScalarWhereInput = {
    AND?: TripMemberScalarWhereInput | TripMemberScalarWhereInput[]
    OR?: TripMemberScalarWhereInput[]
    NOT?: TripMemberScalarWhereInput | TripMemberScalarWhereInput[]
    id?: StringFilter<"TripMember"> | string
    tripId?: StringFilter<"TripMember"> | string
    userId?: StringFilter<"TripMember"> | string
    role?: EnumTripMemberRoleFilter<"TripMember"> | $Enums.TripMemberRole
    joinedAt?: DateTimeFilter<"TripMember"> | Date | string
    addedByUserId?: StringNullableFilter<"TripMember"> | string | null
  }

  export type TripInvitationUpsertWithWhereUniqueWithoutInviterInput = {
    where: TripInvitationWhereUniqueInput
    update: XOR<TripInvitationUpdateWithoutInviterInput, TripInvitationUncheckedUpdateWithoutInviterInput>
    create: XOR<TripInvitationCreateWithoutInviterInput, TripInvitationUncheckedCreateWithoutInviterInput>
  }

  export type TripInvitationUpdateWithWhereUniqueWithoutInviterInput = {
    where: TripInvitationWhereUniqueInput
    data: XOR<TripInvitationUpdateWithoutInviterInput, TripInvitationUncheckedUpdateWithoutInviterInput>
  }

  export type TripInvitationUpdateManyWithWhereWithoutInviterInput = {
    where: TripInvitationScalarWhereInput
    data: XOR<TripInvitationUpdateManyMutationInput, TripInvitationUncheckedUpdateManyWithoutInviterInput>
  }

  export type TripInvitationScalarWhereInput = {
    AND?: TripInvitationScalarWhereInput | TripInvitationScalarWhereInput[]
    OR?: TripInvitationScalarWhereInput[]
    NOT?: TripInvitationScalarWhereInput | TripInvitationScalarWhereInput[]
    id?: StringFilter<"TripInvitation"> | string
    tripId?: StringFilter<"TripInvitation"> | string
    inviterId?: StringFilter<"TripInvitation"> | string
    inviteeUserId?: StringNullableFilter<"TripInvitation"> | string | null
    inviteeEmail?: StringNullableFilter<"TripInvitation"> | string | null
    message?: StringNullableFilter<"TripInvitation"> | string | null
    status?: EnumInvitationStatusFilter<"TripInvitation"> | $Enums.InvitationStatus
    expiresAt?: DateTimeNullableFilter<"TripInvitation"> | Date | string | null
    respondedAt?: DateTimeNullableFilter<"TripInvitation"> | Date | string | null
    createdAt?: DateTimeFilter<"TripInvitation"> | Date | string
    updatedAt?: DateTimeFilter<"TripInvitation"> | Date | string
  }

  export type TripInvitationUpsertWithWhereUniqueWithoutInviteeInput = {
    where: TripInvitationWhereUniqueInput
    update: XOR<TripInvitationUpdateWithoutInviteeInput, TripInvitationUncheckedUpdateWithoutInviteeInput>
    create: XOR<TripInvitationCreateWithoutInviteeInput, TripInvitationUncheckedCreateWithoutInviteeInput>
  }

  export type TripInvitationUpdateWithWhereUniqueWithoutInviteeInput = {
    where: TripInvitationWhereUniqueInput
    data: XOR<TripInvitationUpdateWithoutInviteeInput, TripInvitationUncheckedUpdateWithoutInviteeInput>
  }

  export type TripInvitationUpdateManyWithWhereWithoutInviteeInput = {
    where: TripInvitationScalarWhereInput
    data: XOR<TripInvitationUpdateManyMutationInput, TripInvitationUncheckedUpdateManyWithoutInviteeInput>
  }

  export type RatingUpsertWithWhereUniqueWithoutUserInput = {
    where: RatingWhereUniqueInput
    update: XOR<RatingUpdateWithoutUserInput, RatingUncheckedUpdateWithoutUserInput>
    create: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput>
  }

  export type RatingUpdateWithWhereUniqueWithoutUserInput = {
    where: RatingWhereUniqueInput
    data: XOR<RatingUpdateWithoutUserInput, RatingUncheckedUpdateWithoutUserInput>
  }

  export type RatingUpdateManyWithWhereWithoutUserInput = {
    where: RatingScalarWhereInput
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyWithoutUserInput>
  }

  export type RatingScalarWhereInput = {
    AND?: RatingScalarWhereInput | RatingScalarWhereInput[]
    OR?: RatingScalarWhereInput[]
    NOT?: RatingScalarWhereInput | RatingScalarWhereInput[]
    id?: StringFilter<"Rating"> | string
    userId?: StringFilter<"Rating"> | string
    tripId?: StringFilter<"Rating"> | string
    score?: IntFilter<"Rating"> | number
    comment?: StringNullableFilter<"Rating"> | string | null
    createdAt?: DateTimeFilter<"Rating"> | Date | string
    updatedAt?: DateTimeFilter<"Rating"> | Date | string
  }

  export type UserCreateWithoutOwnedTripsInput = {
    id?: string
    supabaseAuthId: string
    provider?: $Enums.AuthProvider
    providerSubject?: string | null
    email: string
    fullName: string
    avatarUrl?: string | null
    username?: string | null
    bio?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tripMembers?: TripMemberCreateNestedManyWithoutUserInput
    invitationsSent?: TripInvitationCreateNestedManyWithoutInviterInput
    invitationsRecv?: TripInvitationCreateNestedManyWithoutInviteeInput
    ratings?: RatingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOwnedTripsInput = {
    id?: string
    supabaseAuthId: string
    provider?: $Enums.AuthProvider
    providerSubject?: string | null
    email: string
    fullName: string
    avatarUrl?: string | null
    username?: string | null
    bio?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tripMembers?: TripMemberUncheckedCreateNestedManyWithoutUserInput
    invitationsSent?: TripInvitationUncheckedCreateNestedManyWithoutInviterInput
    invitationsRecv?: TripInvitationUncheckedCreateNestedManyWithoutInviteeInput
    ratings?: RatingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOwnedTripsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedTripsInput, UserUncheckedCreateWithoutOwnedTripsInput>
  }

  export type TripMemberCreateWithoutTripInput = {
    id?: string
    role?: $Enums.TripMemberRole
    joinedAt?: Date | string
    addedByUserId?: string | null
    user: UserCreateNestedOneWithoutTripMembersInput
  }

  export type TripMemberUncheckedCreateWithoutTripInput = {
    id?: string
    userId: string
    role?: $Enums.TripMemberRole
    joinedAt?: Date | string
    addedByUserId?: string | null
  }

  export type TripMemberCreateOrConnectWithoutTripInput = {
    where: TripMemberWhereUniqueInput
    create: XOR<TripMemberCreateWithoutTripInput, TripMemberUncheckedCreateWithoutTripInput>
  }

  export type TripMemberCreateManyTripInputEnvelope = {
    data: TripMemberCreateManyTripInput | TripMemberCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type TripDayCreateWithoutTripInput = {
    id?: string
    dayNumber: number
    date: Date | string
    title?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ItineraryItemCreateNestedManyWithoutTripDayInput
  }

  export type TripDayUncheckedCreateWithoutTripInput = {
    id?: string
    dayNumber: number
    date: Date | string
    title?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ItineraryItemUncheckedCreateNestedManyWithoutTripDayInput
  }

  export type TripDayCreateOrConnectWithoutTripInput = {
    where: TripDayWhereUniqueInput
    create: XOR<TripDayCreateWithoutTripInput, TripDayUncheckedCreateWithoutTripInput>
  }

  export type TripDayCreateManyTripInputEnvelope = {
    data: TripDayCreateManyTripInput | TripDayCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type TripInvitationCreateWithoutTripInput = {
    id?: string
    inviteeEmail?: string | null
    message?: string | null
    status?: $Enums.InvitationStatus
    expiresAt?: Date | string | null
    respondedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inviter: UserCreateNestedOneWithoutInvitationsSentInput
    invitee?: UserCreateNestedOneWithoutInvitationsRecvInput
  }

  export type TripInvitationUncheckedCreateWithoutTripInput = {
    id?: string
    inviterId: string
    inviteeUserId?: string | null
    inviteeEmail?: string | null
    message?: string | null
    status?: $Enums.InvitationStatus
    expiresAt?: Date | string | null
    respondedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripInvitationCreateOrConnectWithoutTripInput = {
    where: TripInvitationWhereUniqueInput
    create: XOR<TripInvitationCreateWithoutTripInput, TripInvitationUncheckedCreateWithoutTripInput>
  }

  export type TripInvitationCreateManyTripInputEnvelope = {
    data: TripInvitationCreateManyTripInput | TripInvitationCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type RatingCreateWithoutTripInput = {
    id?: string
    score: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRatingsInput
  }

  export type RatingUncheckedCreateWithoutTripInput = {
    id?: string
    userId: string
    score: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RatingCreateOrConnectWithoutTripInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutTripInput, RatingUncheckedCreateWithoutTripInput>
  }

  export type RatingCreateManyTripInputEnvelope = {
    data: RatingCreateManyTripInput | RatingCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOwnedTripsInput = {
    update: XOR<UserUpdateWithoutOwnedTripsInput, UserUncheckedUpdateWithoutOwnedTripsInput>
    create: XOR<UserCreateWithoutOwnedTripsInput, UserUncheckedCreateWithoutOwnedTripsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnedTripsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnedTripsInput, UserUncheckedUpdateWithoutOwnedTripsInput>
  }

  export type UserUpdateWithoutOwnedTripsInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseAuthId?: StringFieldUpdateOperationsInput | string
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerSubject?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripMembers?: TripMemberUpdateManyWithoutUserNestedInput
    invitationsSent?: TripInvitationUpdateManyWithoutInviterNestedInput
    invitationsRecv?: TripInvitationUpdateManyWithoutInviteeNestedInput
    ratings?: RatingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedTripsInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseAuthId?: StringFieldUpdateOperationsInput | string
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerSubject?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripMembers?: TripMemberUncheckedUpdateManyWithoutUserNestedInput
    invitationsSent?: TripInvitationUncheckedUpdateManyWithoutInviterNestedInput
    invitationsRecv?: TripInvitationUncheckedUpdateManyWithoutInviteeNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TripMemberUpsertWithWhereUniqueWithoutTripInput = {
    where: TripMemberWhereUniqueInput
    update: XOR<TripMemberUpdateWithoutTripInput, TripMemberUncheckedUpdateWithoutTripInput>
    create: XOR<TripMemberCreateWithoutTripInput, TripMemberUncheckedCreateWithoutTripInput>
  }

  export type TripMemberUpdateWithWhereUniqueWithoutTripInput = {
    where: TripMemberWhereUniqueInput
    data: XOR<TripMemberUpdateWithoutTripInput, TripMemberUncheckedUpdateWithoutTripInput>
  }

  export type TripMemberUpdateManyWithWhereWithoutTripInput = {
    where: TripMemberScalarWhereInput
    data: XOR<TripMemberUpdateManyMutationInput, TripMemberUncheckedUpdateManyWithoutTripInput>
  }

  export type TripDayUpsertWithWhereUniqueWithoutTripInput = {
    where: TripDayWhereUniqueInput
    update: XOR<TripDayUpdateWithoutTripInput, TripDayUncheckedUpdateWithoutTripInput>
    create: XOR<TripDayCreateWithoutTripInput, TripDayUncheckedCreateWithoutTripInput>
  }

  export type TripDayUpdateWithWhereUniqueWithoutTripInput = {
    where: TripDayWhereUniqueInput
    data: XOR<TripDayUpdateWithoutTripInput, TripDayUncheckedUpdateWithoutTripInput>
  }

  export type TripDayUpdateManyWithWhereWithoutTripInput = {
    where: TripDayScalarWhereInput
    data: XOR<TripDayUpdateManyMutationInput, TripDayUncheckedUpdateManyWithoutTripInput>
  }

  export type TripDayScalarWhereInput = {
    AND?: TripDayScalarWhereInput | TripDayScalarWhereInput[]
    OR?: TripDayScalarWhereInput[]
    NOT?: TripDayScalarWhereInput | TripDayScalarWhereInput[]
    id?: StringFilter<"TripDay"> | string
    tripId?: StringFilter<"TripDay"> | string
    dayNumber?: IntFilter<"TripDay"> | number
    date?: DateTimeFilter<"TripDay"> | Date | string
    title?: StringNullableFilter<"TripDay"> | string | null
    note?: StringNullableFilter<"TripDay"> | string | null
    createdAt?: DateTimeFilter<"TripDay"> | Date | string
    updatedAt?: DateTimeFilter<"TripDay"> | Date | string
  }

  export type TripInvitationUpsertWithWhereUniqueWithoutTripInput = {
    where: TripInvitationWhereUniqueInput
    update: XOR<TripInvitationUpdateWithoutTripInput, TripInvitationUncheckedUpdateWithoutTripInput>
    create: XOR<TripInvitationCreateWithoutTripInput, TripInvitationUncheckedCreateWithoutTripInput>
  }

  export type TripInvitationUpdateWithWhereUniqueWithoutTripInput = {
    where: TripInvitationWhereUniqueInput
    data: XOR<TripInvitationUpdateWithoutTripInput, TripInvitationUncheckedUpdateWithoutTripInput>
  }

  export type TripInvitationUpdateManyWithWhereWithoutTripInput = {
    where: TripInvitationScalarWhereInput
    data: XOR<TripInvitationUpdateManyMutationInput, TripInvitationUncheckedUpdateManyWithoutTripInput>
  }

  export type RatingUpsertWithWhereUniqueWithoutTripInput = {
    where: RatingWhereUniqueInput
    update: XOR<RatingUpdateWithoutTripInput, RatingUncheckedUpdateWithoutTripInput>
    create: XOR<RatingCreateWithoutTripInput, RatingUncheckedCreateWithoutTripInput>
  }

  export type RatingUpdateWithWhereUniqueWithoutTripInput = {
    where: RatingWhereUniqueInput
    data: XOR<RatingUpdateWithoutTripInput, RatingUncheckedUpdateWithoutTripInput>
  }

  export type RatingUpdateManyWithWhereWithoutTripInput = {
    where: RatingScalarWhereInput
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyWithoutTripInput>
  }

  export type TripCreateWithoutMembersInput = {
    id?: string
    title: string
    description?: string | null
    destination: string
    destinationCountry?: string | null
    destinationCity?: string | null
    budgetTotal?: Decimal | DecimalJsLike | number | string | null
    travelerCount: number
    startDate: Date | string
    endDate: Date | string
    timezone?: string
    coverImageUrl?: string | null
    status?: $Enums.TripStatus
    endedAt?: Date | string | null
    endedByUserId?: string | null
    isTemplatePublished?: boolean
    templatePublishedAt?: Date | string | null
    templateUseCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedTripsInput
    days?: TripDayCreateNestedManyWithoutTripInput
    invitations?: TripInvitationCreateNestedManyWithoutTripInput
    ratings?: RatingCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutMembersInput = {
    id?: string
    ownerId: string
    title: string
    description?: string | null
    destination: string
    destinationCountry?: string | null
    destinationCity?: string | null
    budgetTotal?: Decimal | DecimalJsLike | number | string | null
    travelerCount: number
    startDate: Date | string
    endDate: Date | string
    timezone?: string
    coverImageUrl?: string | null
    status?: $Enums.TripStatus
    endedAt?: Date | string | null
    endedByUserId?: string | null
    isTemplatePublished?: boolean
    templatePublishedAt?: Date | string | null
    templateUseCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    days?: TripDayUncheckedCreateNestedManyWithoutTripInput
    invitations?: TripInvitationUncheckedCreateNestedManyWithoutTripInput
    ratings?: RatingUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutMembersInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutMembersInput, TripUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutTripMembersInput = {
    id?: string
    supabaseAuthId: string
    provider?: $Enums.AuthProvider
    providerSubject?: string | null
    email: string
    fullName: string
    avatarUrl?: string | null
    username?: string | null
    bio?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedTrips?: TripCreateNestedManyWithoutOwnerInput
    invitationsSent?: TripInvitationCreateNestedManyWithoutInviterInput
    invitationsRecv?: TripInvitationCreateNestedManyWithoutInviteeInput
    ratings?: RatingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTripMembersInput = {
    id?: string
    supabaseAuthId: string
    provider?: $Enums.AuthProvider
    providerSubject?: string | null
    email: string
    fullName: string
    avatarUrl?: string | null
    username?: string | null
    bio?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedTrips?: TripUncheckedCreateNestedManyWithoutOwnerInput
    invitationsSent?: TripInvitationUncheckedCreateNestedManyWithoutInviterInput
    invitationsRecv?: TripInvitationUncheckedCreateNestedManyWithoutInviteeInput
    ratings?: RatingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTripMembersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTripMembersInput, UserUncheckedCreateWithoutTripMembersInput>
  }

  export type TripUpsertWithoutMembersInput = {
    update: XOR<TripUpdateWithoutMembersInput, TripUncheckedUpdateWithoutMembersInput>
    create: XOR<TripCreateWithoutMembersInput, TripUncheckedCreateWithoutMembersInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutMembersInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutMembersInput, TripUncheckedUpdateWithoutMembersInput>
  }

  export type TripUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: StringFieldUpdateOperationsInput | string
    destinationCountry?: NullableStringFieldUpdateOperationsInput | string | null
    destinationCity?: NullableStringFieldUpdateOperationsInput | string | null
    budgetTotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    travelerCount?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    isTemplatePublished?: BoolFieldUpdateOperationsInput | boolean
    templatePublishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    templateUseCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedTripsNestedInput
    days?: TripDayUpdateManyWithoutTripNestedInput
    invitations?: TripInvitationUpdateManyWithoutTripNestedInput
    ratings?: RatingUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: StringFieldUpdateOperationsInput | string
    destinationCountry?: NullableStringFieldUpdateOperationsInput | string | null
    destinationCity?: NullableStringFieldUpdateOperationsInput | string | null
    budgetTotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    travelerCount?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    isTemplatePublished?: BoolFieldUpdateOperationsInput | boolean
    templatePublishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    templateUseCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    days?: TripDayUncheckedUpdateManyWithoutTripNestedInput
    invitations?: TripInvitationUncheckedUpdateManyWithoutTripNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutTripNestedInput
  }

  export type UserUpsertWithoutTripMembersInput = {
    update: XOR<UserUpdateWithoutTripMembersInput, UserUncheckedUpdateWithoutTripMembersInput>
    create: XOR<UserCreateWithoutTripMembersInput, UserUncheckedCreateWithoutTripMembersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTripMembersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTripMembersInput, UserUncheckedUpdateWithoutTripMembersInput>
  }

  export type UserUpdateWithoutTripMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseAuthId?: StringFieldUpdateOperationsInput | string
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerSubject?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedTrips?: TripUpdateManyWithoutOwnerNestedInput
    invitationsSent?: TripInvitationUpdateManyWithoutInviterNestedInput
    invitationsRecv?: TripInvitationUpdateManyWithoutInviteeNestedInput
    ratings?: RatingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTripMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseAuthId?: StringFieldUpdateOperationsInput | string
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerSubject?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedTrips?: TripUncheckedUpdateManyWithoutOwnerNestedInput
    invitationsSent?: TripInvitationUncheckedUpdateManyWithoutInviterNestedInput
    invitationsRecv?: TripInvitationUncheckedUpdateManyWithoutInviteeNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TripCreateWithoutDaysInput = {
    id?: string
    title: string
    description?: string | null
    destination: string
    destinationCountry?: string | null
    destinationCity?: string | null
    budgetTotal?: Decimal | DecimalJsLike | number | string | null
    travelerCount: number
    startDate: Date | string
    endDate: Date | string
    timezone?: string
    coverImageUrl?: string | null
    status?: $Enums.TripStatus
    endedAt?: Date | string | null
    endedByUserId?: string | null
    isTemplatePublished?: boolean
    templatePublishedAt?: Date | string | null
    templateUseCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedTripsInput
    members?: TripMemberCreateNestedManyWithoutTripInput
    invitations?: TripInvitationCreateNestedManyWithoutTripInput
    ratings?: RatingCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutDaysInput = {
    id?: string
    ownerId: string
    title: string
    description?: string | null
    destination: string
    destinationCountry?: string | null
    destinationCity?: string | null
    budgetTotal?: Decimal | DecimalJsLike | number | string | null
    travelerCount: number
    startDate: Date | string
    endDate: Date | string
    timezone?: string
    coverImageUrl?: string | null
    status?: $Enums.TripStatus
    endedAt?: Date | string | null
    endedByUserId?: string | null
    isTemplatePublished?: boolean
    templatePublishedAt?: Date | string | null
    templateUseCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: TripMemberUncheckedCreateNestedManyWithoutTripInput
    invitations?: TripInvitationUncheckedCreateNestedManyWithoutTripInput
    ratings?: RatingUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutDaysInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutDaysInput, TripUncheckedCreateWithoutDaysInput>
  }

  export type ItineraryItemCreateWithoutTripDayInput = {
    id?: string
    title: string
    description?: string | null
    placeName?: string | null
    placeAddress?: string | null
    country?: string | null
    city?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    startTime?: Date | string | null
    endTime?: Date | string | null
    estimatedCost?: Decimal | DecimalJsLike | number | string | null
    currency?: string | null
    note?: string | null
    sortOrder?: number
    createdByUserId?: string | null
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItineraryItemUncheckedCreateWithoutTripDayInput = {
    id?: string
    title: string
    description?: string | null
    placeName?: string | null
    placeAddress?: string | null
    country?: string | null
    city?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    startTime?: Date | string | null
    endTime?: Date | string | null
    estimatedCost?: Decimal | DecimalJsLike | number | string | null
    currency?: string | null
    note?: string | null
    sortOrder?: number
    createdByUserId?: string | null
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItineraryItemCreateOrConnectWithoutTripDayInput = {
    where: ItineraryItemWhereUniqueInput
    create: XOR<ItineraryItemCreateWithoutTripDayInput, ItineraryItemUncheckedCreateWithoutTripDayInput>
  }

  export type ItineraryItemCreateManyTripDayInputEnvelope = {
    data: ItineraryItemCreateManyTripDayInput | ItineraryItemCreateManyTripDayInput[]
    skipDuplicates?: boolean
  }

  export type TripUpsertWithoutDaysInput = {
    update: XOR<TripUpdateWithoutDaysInput, TripUncheckedUpdateWithoutDaysInput>
    create: XOR<TripCreateWithoutDaysInput, TripUncheckedCreateWithoutDaysInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutDaysInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutDaysInput, TripUncheckedUpdateWithoutDaysInput>
  }

  export type TripUpdateWithoutDaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: StringFieldUpdateOperationsInput | string
    destinationCountry?: NullableStringFieldUpdateOperationsInput | string | null
    destinationCity?: NullableStringFieldUpdateOperationsInput | string | null
    budgetTotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    travelerCount?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    isTemplatePublished?: BoolFieldUpdateOperationsInput | boolean
    templatePublishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    templateUseCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedTripsNestedInput
    members?: TripMemberUpdateManyWithoutTripNestedInput
    invitations?: TripInvitationUpdateManyWithoutTripNestedInput
    ratings?: RatingUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutDaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: StringFieldUpdateOperationsInput | string
    destinationCountry?: NullableStringFieldUpdateOperationsInput | string | null
    destinationCity?: NullableStringFieldUpdateOperationsInput | string | null
    budgetTotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    travelerCount?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    isTemplatePublished?: BoolFieldUpdateOperationsInput | boolean
    templatePublishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    templateUseCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TripMemberUncheckedUpdateManyWithoutTripNestedInput
    invitations?: TripInvitationUncheckedUpdateManyWithoutTripNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutTripNestedInput
  }

  export type ItineraryItemUpsertWithWhereUniqueWithoutTripDayInput = {
    where: ItineraryItemWhereUniqueInput
    update: XOR<ItineraryItemUpdateWithoutTripDayInput, ItineraryItemUncheckedUpdateWithoutTripDayInput>
    create: XOR<ItineraryItemCreateWithoutTripDayInput, ItineraryItemUncheckedCreateWithoutTripDayInput>
  }

  export type ItineraryItemUpdateWithWhereUniqueWithoutTripDayInput = {
    where: ItineraryItemWhereUniqueInput
    data: XOR<ItineraryItemUpdateWithoutTripDayInput, ItineraryItemUncheckedUpdateWithoutTripDayInput>
  }

  export type ItineraryItemUpdateManyWithWhereWithoutTripDayInput = {
    where: ItineraryItemScalarWhereInput
    data: XOR<ItineraryItemUpdateManyMutationInput, ItineraryItemUncheckedUpdateManyWithoutTripDayInput>
  }

  export type ItineraryItemScalarWhereInput = {
    AND?: ItineraryItemScalarWhereInput | ItineraryItemScalarWhereInput[]
    OR?: ItineraryItemScalarWhereInput[]
    NOT?: ItineraryItemScalarWhereInput | ItineraryItemScalarWhereInput[]
    id?: StringFilter<"ItineraryItem"> | string
    tripDayId?: StringFilter<"ItineraryItem"> | string
    title?: StringFilter<"ItineraryItem"> | string
    description?: StringNullableFilter<"ItineraryItem"> | string | null
    placeName?: StringNullableFilter<"ItineraryItem"> | string | null
    placeAddress?: StringNullableFilter<"ItineraryItem"> | string | null
    country?: StringNullableFilter<"ItineraryItem"> | string | null
    city?: StringNullableFilter<"ItineraryItem"> | string | null
    latitude?: DecimalNullableFilter<"ItineraryItem"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"ItineraryItem"> | Decimal | DecimalJsLike | number | string | null
    startTime?: DateTimeNullableFilter<"ItineraryItem"> | Date | string | null
    endTime?: DateTimeNullableFilter<"ItineraryItem"> | Date | string | null
    estimatedCost?: DecimalNullableFilter<"ItineraryItem"> | Decimal | DecimalJsLike | number | string | null
    currency?: StringNullableFilter<"ItineraryItem"> | string | null
    note?: StringNullableFilter<"ItineraryItem"> | string | null
    sortOrder?: IntFilter<"ItineraryItem"> | number
    createdByUserId?: StringNullableFilter<"ItineraryItem"> | string | null
    isCompleted?: BoolFilter<"ItineraryItem"> | boolean
    createdAt?: DateTimeFilter<"ItineraryItem"> | Date | string
    updatedAt?: DateTimeFilter<"ItineraryItem"> | Date | string
  }

  export type TripDayCreateWithoutItemsInput = {
    id?: string
    dayNumber: number
    date: Date | string
    title?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trip: TripCreateNestedOneWithoutDaysInput
  }

  export type TripDayUncheckedCreateWithoutItemsInput = {
    id?: string
    tripId: string
    dayNumber: number
    date: Date | string
    title?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripDayCreateOrConnectWithoutItemsInput = {
    where: TripDayWhereUniqueInput
    create: XOR<TripDayCreateWithoutItemsInput, TripDayUncheckedCreateWithoutItemsInput>
  }

  export type TripDayUpsertWithoutItemsInput = {
    update: XOR<TripDayUpdateWithoutItemsInput, TripDayUncheckedUpdateWithoutItemsInput>
    create: XOR<TripDayCreateWithoutItemsInput, TripDayUncheckedCreateWithoutItemsInput>
    where?: TripDayWhereInput
  }

  export type TripDayUpdateToOneWithWhereWithoutItemsInput = {
    where?: TripDayWhereInput
    data: XOR<TripDayUpdateWithoutItemsInput, TripDayUncheckedUpdateWithoutItemsInput>
  }

  export type TripDayUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayNumber?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutDaysNestedInput
  }

  export type TripDayUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    dayNumber?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripCreateWithoutInvitationsInput = {
    id?: string
    title: string
    description?: string | null
    destination: string
    destinationCountry?: string | null
    destinationCity?: string | null
    budgetTotal?: Decimal | DecimalJsLike | number | string | null
    travelerCount: number
    startDate: Date | string
    endDate: Date | string
    timezone?: string
    coverImageUrl?: string | null
    status?: $Enums.TripStatus
    endedAt?: Date | string | null
    endedByUserId?: string | null
    isTemplatePublished?: boolean
    templatePublishedAt?: Date | string | null
    templateUseCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedTripsInput
    members?: TripMemberCreateNestedManyWithoutTripInput
    days?: TripDayCreateNestedManyWithoutTripInput
    ratings?: RatingCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutInvitationsInput = {
    id?: string
    ownerId: string
    title: string
    description?: string | null
    destination: string
    destinationCountry?: string | null
    destinationCity?: string | null
    budgetTotal?: Decimal | DecimalJsLike | number | string | null
    travelerCount: number
    startDate: Date | string
    endDate: Date | string
    timezone?: string
    coverImageUrl?: string | null
    status?: $Enums.TripStatus
    endedAt?: Date | string | null
    endedByUserId?: string | null
    isTemplatePublished?: boolean
    templatePublishedAt?: Date | string | null
    templateUseCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: TripMemberUncheckedCreateNestedManyWithoutTripInput
    days?: TripDayUncheckedCreateNestedManyWithoutTripInput
    ratings?: RatingUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutInvitationsInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutInvitationsInput, TripUncheckedCreateWithoutInvitationsInput>
  }

  export type UserCreateWithoutInvitationsSentInput = {
    id?: string
    supabaseAuthId: string
    provider?: $Enums.AuthProvider
    providerSubject?: string | null
    email: string
    fullName: string
    avatarUrl?: string | null
    username?: string | null
    bio?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedTrips?: TripCreateNestedManyWithoutOwnerInput
    tripMembers?: TripMemberCreateNestedManyWithoutUserInput
    invitationsRecv?: TripInvitationCreateNestedManyWithoutInviteeInput
    ratings?: RatingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInvitationsSentInput = {
    id?: string
    supabaseAuthId: string
    provider?: $Enums.AuthProvider
    providerSubject?: string | null
    email: string
    fullName: string
    avatarUrl?: string | null
    username?: string | null
    bio?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedTrips?: TripUncheckedCreateNestedManyWithoutOwnerInput
    tripMembers?: TripMemberUncheckedCreateNestedManyWithoutUserInput
    invitationsRecv?: TripInvitationUncheckedCreateNestedManyWithoutInviteeInput
    ratings?: RatingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInvitationsSentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvitationsSentInput, UserUncheckedCreateWithoutInvitationsSentInput>
  }

  export type UserCreateWithoutInvitationsRecvInput = {
    id?: string
    supabaseAuthId: string
    provider?: $Enums.AuthProvider
    providerSubject?: string | null
    email: string
    fullName: string
    avatarUrl?: string | null
    username?: string | null
    bio?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedTrips?: TripCreateNestedManyWithoutOwnerInput
    tripMembers?: TripMemberCreateNestedManyWithoutUserInput
    invitationsSent?: TripInvitationCreateNestedManyWithoutInviterInput
    ratings?: RatingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInvitationsRecvInput = {
    id?: string
    supabaseAuthId: string
    provider?: $Enums.AuthProvider
    providerSubject?: string | null
    email: string
    fullName: string
    avatarUrl?: string | null
    username?: string | null
    bio?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedTrips?: TripUncheckedCreateNestedManyWithoutOwnerInput
    tripMembers?: TripMemberUncheckedCreateNestedManyWithoutUserInput
    invitationsSent?: TripInvitationUncheckedCreateNestedManyWithoutInviterInput
    ratings?: RatingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInvitationsRecvInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvitationsRecvInput, UserUncheckedCreateWithoutInvitationsRecvInput>
  }

  export type TripUpsertWithoutInvitationsInput = {
    update: XOR<TripUpdateWithoutInvitationsInput, TripUncheckedUpdateWithoutInvitationsInput>
    create: XOR<TripCreateWithoutInvitationsInput, TripUncheckedCreateWithoutInvitationsInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutInvitationsInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutInvitationsInput, TripUncheckedUpdateWithoutInvitationsInput>
  }

  export type TripUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: StringFieldUpdateOperationsInput | string
    destinationCountry?: NullableStringFieldUpdateOperationsInput | string | null
    destinationCity?: NullableStringFieldUpdateOperationsInput | string | null
    budgetTotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    travelerCount?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    isTemplatePublished?: BoolFieldUpdateOperationsInput | boolean
    templatePublishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    templateUseCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedTripsNestedInput
    members?: TripMemberUpdateManyWithoutTripNestedInput
    days?: TripDayUpdateManyWithoutTripNestedInput
    ratings?: RatingUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: StringFieldUpdateOperationsInput | string
    destinationCountry?: NullableStringFieldUpdateOperationsInput | string | null
    destinationCity?: NullableStringFieldUpdateOperationsInput | string | null
    budgetTotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    travelerCount?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    isTemplatePublished?: BoolFieldUpdateOperationsInput | boolean
    templatePublishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    templateUseCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TripMemberUncheckedUpdateManyWithoutTripNestedInput
    days?: TripDayUncheckedUpdateManyWithoutTripNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutTripNestedInput
  }

  export type UserUpsertWithoutInvitationsSentInput = {
    update: XOR<UserUpdateWithoutInvitationsSentInput, UserUncheckedUpdateWithoutInvitationsSentInput>
    create: XOR<UserCreateWithoutInvitationsSentInput, UserUncheckedCreateWithoutInvitationsSentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInvitationsSentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInvitationsSentInput, UserUncheckedUpdateWithoutInvitationsSentInput>
  }

  export type UserUpdateWithoutInvitationsSentInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseAuthId?: StringFieldUpdateOperationsInput | string
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerSubject?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedTrips?: TripUpdateManyWithoutOwnerNestedInput
    tripMembers?: TripMemberUpdateManyWithoutUserNestedInput
    invitationsRecv?: TripInvitationUpdateManyWithoutInviteeNestedInput
    ratings?: RatingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInvitationsSentInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseAuthId?: StringFieldUpdateOperationsInput | string
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerSubject?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedTrips?: TripUncheckedUpdateManyWithoutOwnerNestedInput
    tripMembers?: TripMemberUncheckedUpdateManyWithoutUserNestedInput
    invitationsRecv?: TripInvitationUncheckedUpdateManyWithoutInviteeNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutInvitationsRecvInput = {
    update: XOR<UserUpdateWithoutInvitationsRecvInput, UserUncheckedUpdateWithoutInvitationsRecvInput>
    create: XOR<UserCreateWithoutInvitationsRecvInput, UserUncheckedCreateWithoutInvitationsRecvInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInvitationsRecvInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInvitationsRecvInput, UserUncheckedUpdateWithoutInvitationsRecvInput>
  }

  export type UserUpdateWithoutInvitationsRecvInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseAuthId?: StringFieldUpdateOperationsInput | string
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerSubject?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedTrips?: TripUpdateManyWithoutOwnerNestedInput
    tripMembers?: TripMemberUpdateManyWithoutUserNestedInput
    invitationsSent?: TripInvitationUpdateManyWithoutInviterNestedInput
    ratings?: RatingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInvitationsRecvInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseAuthId?: StringFieldUpdateOperationsInput | string
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerSubject?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedTrips?: TripUncheckedUpdateManyWithoutOwnerNestedInput
    tripMembers?: TripMemberUncheckedUpdateManyWithoutUserNestedInput
    invitationsSent?: TripInvitationUncheckedUpdateManyWithoutInviterNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutRatingsInput = {
    id?: string
    supabaseAuthId: string
    provider?: $Enums.AuthProvider
    providerSubject?: string | null
    email: string
    fullName: string
    avatarUrl?: string | null
    username?: string | null
    bio?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedTrips?: TripCreateNestedManyWithoutOwnerInput
    tripMembers?: TripMemberCreateNestedManyWithoutUserInput
    invitationsSent?: TripInvitationCreateNestedManyWithoutInviterInput
    invitationsRecv?: TripInvitationCreateNestedManyWithoutInviteeInput
  }

  export type UserUncheckedCreateWithoutRatingsInput = {
    id?: string
    supabaseAuthId: string
    provider?: $Enums.AuthProvider
    providerSubject?: string | null
    email: string
    fullName: string
    avatarUrl?: string | null
    username?: string | null
    bio?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedTrips?: TripUncheckedCreateNestedManyWithoutOwnerInput
    tripMembers?: TripMemberUncheckedCreateNestedManyWithoutUserInput
    invitationsSent?: TripInvitationUncheckedCreateNestedManyWithoutInviterInput
    invitationsRecv?: TripInvitationUncheckedCreateNestedManyWithoutInviteeInput
  }

  export type UserCreateOrConnectWithoutRatingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRatingsInput, UserUncheckedCreateWithoutRatingsInput>
  }

  export type TripCreateWithoutRatingsInput = {
    id?: string
    title: string
    description?: string | null
    destination: string
    destinationCountry?: string | null
    destinationCity?: string | null
    budgetTotal?: Decimal | DecimalJsLike | number | string | null
    travelerCount: number
    startDate: Date | string
    endDate: Date | string
    timezone?: string
    coverImageUrl?: string | null
    status?: $Enums.TripStatus
    endedAt?: Date | string | null
    endedByUserId?: string | null
    isTemplatePublished?: boolean
    templatePublishedAt?: Date | string | null
    templateUseCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedTripsInput
    members?: TripMemberCreateNestedManyWithoutTripInput
    days?: TripDayCreateNestedManyWithoutTripInput
    invitations?: TripInvitationCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutRatingsInput = {
    id?: string
    ownerId: string
    title: string
    description?: string | null
    destination: string
    destinationCountry?: string | null
    destinationCity?: string | null
    budgetTotal?: Decimal | DecimalJsLike | number | string | null
    travelerCount: number
    startDate: Date | string
    endDate: Date | string
    timezone?: string
    coverImageUrl?: string | null
    status?: $Enums.TripStatus
    endedAt?: Date | string | null
    endedByUserId?: string | null
    isTemplatePublished?: boolean
    templatePublishedAt?: Date | string | null
    templateUseCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: TripMemberUncheckedCreateNestedManyWithoutTripInput
    days?: TripDayUncheckedCreateNestedManyWithoutTripInput
    invitations?: TripInvitationUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutRatingsInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutRatingsInput, TripUncheckedCreateWithoutRatingsInput>
  }

  export type UserUpsertWithoutRatingsInput = {
    update: XOR<UserUpdateWithoutRatingsInput, UserUncheckedUpdateWithoutRatingsInput>
    create: XOR<UserCreateWithoutRatingsInput, UserUncheckedCreateWithoutRatingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRatingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRatingsInput, UserUncheckedUpdateWithoutRatingsInput>
  }

  export type UserUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseAuthId?: StringFieldUpdateOperationsInput | string
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerSubject?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedTrips?: TripUpdateManyWithoutOwnerNestedInput
    tripMembers?: TripMemberUpdateManyWithoutUserNestedInput
    invitationsSent?: TripInvitationUpdateManyWithoutInviterNestedInput
    invitationsRecv?: TripInvitationUpdateManyWithoutInviteeNestedInput
  }

  export type UserUncheckedUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseAuthId?: StringFieldUpdateOperationsInput | string
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerSubject?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedTrips?: TripUncheckedUpdateManyWithoutOwnerNestedInput
    tripMembers?: TripMemberUncheckedUpdateManyWithoutUserNestedInput
    invitationsSent?: TripInvitationUncheckedUpdateManyWithoutInviterNestedInput
    invitationsRecv?: TripInvitationUncheckedUpdateManyWithoutInviteeNestedInput
  }

  export type TripUpsertWithoutRatingsInput = {
    update: XOR<TripUpdateWithoutRatingsInput, TripUncheckedUpdateWithoutRatingsInput>
    create: XOR<TripCreateWithoutRatingsInput, TripUncheckedCreateWithoutRatingsInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutRatingsInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutRatingsInput, TripUncheckedUpdateWithoutRatingsInput>
  }

  export type TripUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: StringFieldUpdateOperationsInput | string
    destinationCountry?: NullableStringFieldUpdateOperationsInput | string | null
    destinationCity?: NullableStringFieldUpdateOperationsInput | string | null
    budgetTotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    travelerCount?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    isTemplatePublished?: BoolFieldUpdateOperationsInput | boolean
    templatePublishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    templateUseCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedTripsNestedInput
    members?: TripMemberUpdateManyWithoutTripNestedInput
    days?: TripDayUpdateManyWithoutTripNestedInput
    invitations?: TripInvitationUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: StringFieldUpdateOperationsInput | string
    destinationCountry?: NullableStringFieldUpdateOperationsInput | string | null
    destinationCity?: NullableStringFieldUpdateOperationsInput | string | null
    budgetTotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    travelerCount?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    isTemplatePublished?: BoolFieldUpdateOperationsInput | boolean
    templatePublishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    templateUseCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TripMemberUncheckedUpdateManyWithoutTripNestedInput
    days?: TripDayUncheckedUpdateManyWithoutTripNestedInput
    invitations?: TripInvitationUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripCreateManyOwnerInput = {
    id?: string
    title: string
    description?: string | null
    destination: string
    destinationCountry?: string | null
    destinationCity?: string | null
    budgetTotal?: Decimal | DecimalJsLike | number | string | null
    travelerCount: number
    startDate: Date | string
    endDate: Date | string
    timezone?: string
    coverImageUrl?: string | null
    status?: $Enums.TripStatus
    endedAt?: Date | string | null
    endedByUserId?: string | null
    isTemplatePublished?: boolean
    templatePublishedAt?: Date | string | null
    templateUseCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripMemberCreateManyUserInput = {
    id?: string
    tripId: string
    role?: $Enums.TripMemberRole
    joinedAt?: Date | string
    addedByUserId?: string | null
  }

  export type TripInvitationCreateManyInviterInput = {
    id?: string
    tripId: string
    inviteeUserId?: string | null
    inviteeEmail?: string | null
    message?: string | null
    status?: $Enums.InvitationStatus
    expiresAt?: Date | string | null
    respondedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripInvitationCreateManyInviteeInput = {
    id?: string
    tripId: string
    inviterId: string
    inviteeEmail?: string | null
    message?: string | null
    status?: $Enums.InvitationStatus
    expiresAt?: Date | string | null
    respondedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RatingCreateManyUserInput = {
    id?: string
    tripId: string
    score: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: StringFieldUpdateOperationsInput | string
    destinationCountry?: NullableStringFieldUpdateOperationsInput | string | null
    destinationCity?: NullableStringFieldUpdateOperationsInput | string | null
    budgetTotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    travelerCount?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    isTemplatePublished?: BoolFieldUpdateOperationsInput | boolean
    templatePublishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    templateUseCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TripMemberUpdateManyWithoutTripNestedInput
    days?: TripDayUpdateManyWithoutTripNestedInput
    invitations?: TripInvitationUpdateManyWithoutTripNestedInput
    ratings?: RatingUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: StringFieldUpdateOperationsInput | string
    destinationCountry?: NullableStringFieldUpdateOperationsInput | string | null
    destinationCity?: NullableStringFieldUpdateOperationsInput | string | null
    budgetTotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    travelerCount?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    isTemplatePublished?: BoolFieldUpdateOperationsInput | boolean
    templatePublishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    templateUseCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TripMemberUncheckedUpdateManyWithoutTripNestedInput
    days?: TripDayUncheckedUpdateManyWithoutTripNestedInput
    invitations?: TripInvitationUncheckedUpdateManyWithoutTripNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: StringFieldUpdateOperationsInput | string
    destinationCountry?: NullableStringFieldUpdateOperationsInput | string | null
    destinationCity?: NullableStringFieldUpdateOperationsInput | string | null
    budgetTotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    travelerCount?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    isTemplatePublished?: BoolFieldUpdateOperationsInput | boolean
    templatePublishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    templateUseCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumTripMemberRoleFieldUpdateOperationsInput | $Enums.TripMemberRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    trip?: TripUpdateOneRequiredWithoutMembersNestedInput
  }

  export type TripMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    role?: EnumTripMemberRoleFieldUpdateOperationsInput | $Enums.TripMemberRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TripMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    role?: EnumTripMemberRoleFieldUpdateOperationsInput | $Enums.TripMemberRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TripInvitationUpdateWithoutInviterInput = {
    id?: StringFieldUpdateOperationsInput | string
    inviteeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutInvitationsNestedInput
    invitee?: UserUpdateOneWithoutInvitationsRecvNestedInput
  }

  export type TripInvitationUncheckedUpdateWithoutInviterInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    inviteeUserId?: NullableStringFieldUpdateOperationsInput | string | null
    inviteeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripInvitationUncheckedUpdateManyWithoutInviterInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    inviteeUserId?: NullableStringFieldUpdateOperationsInput | string | null
    inviteeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripInvitationUpdateWithoutInviteeInput = {
    id?: StringFieldUpdateOperationsInput | string
    inviteeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutInvitationsNestedInput
    inviter?: UserUpdateOneRequiredWithoutInvitationsSentNestedInput
  }

  export type TripInvitationUncheckedUpdateWithoutInviteeInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    inviterId?: StringFieldUpdateOperationsInput | string
    inviteeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripInvitationUncheckedUpdateManyWithoutInviteeInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    inviterId?: StringFieldUpdateOperationsInput | string
    inviteeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type RatingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripMemberCreateManyTripInput = {
    id?: string
    userId: string
    role?: $Enums.TripMemberRole
    joinedAt?: Date | string
    addedByUserId?: string | null
  }

  export type TripDayCreateManyTripInput = {
    id?: string
    dayNumber: number
    date: Date | string
    title?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripInvitationCreateManyTripInput = {
    id?: string
    inviterId: string
    inviteeUserId?: string | null
    inviteeEmail?: string | null
    message?: string | null
    status?: $Enums.InvitationStatus
    expiresAt?: Date | string | null
    respondedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RatingCreateManyTripInput = {
    id?: string
    userId: string
    score: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripMemberUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumTripMemberRoleFieldUpdateOperationsInput | $Enums.TripMemberRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutTripMembersNestedInput
  }

  export type TripMemberUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumTripMemberRoleFieldUpdateOperationsInput | $Enums.TripMemberRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TripMemberUncheckedUpdateManyWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumTripMemberRoleFieldUpdateOperationsInput | $Enums.TripMemberRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TripDayUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayNumber?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItineraryItemUpdateManyWithoutTripDayNestedInput
  }

  export type TripDayUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayNumber?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItineraryItemUncheckedUpdateManyWithoutTripDayNestedInput
  }

  export type TripDayUncheckedUpdateManyWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayNumber?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripInvitationUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    inviteeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inviter?: UserUpdateOneRequiredWithoutInvitationsSentNestedInput
    invitee?: UserUpdateOneWithoutInvitationsRecvNestedInput
  }

  export type TripInvitationUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    inviterId?: StringFieldUpdateOperationsInput | string
    inviteeUserId?: NullableStringFieldUpdateOperationsInput | string | null
    inviteeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripInvitationUncheckedUpdateManyWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    inviterId?: StringFieldUpdateOperationsInput | string
    inviteeUserId?: NullableStringFieldUpdateOperationsInput | string | null
    inviteeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type RatingUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUncheckedUpdateManyWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItineraryItemCreateManyTripDayInput = {
    id?: string
    title: string
    description?: string | null
    placeName?: string | null
    placeAddress?: string | null
    country?: string | null
    city?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    startTime?: Date | string | null
    endTime?: Date | string | null
    estimatedCost?: Decimal | DecimalJsLike | number | string | null
    currency?: string | null
    note?: string | null
    sortOrder?: number
    createdByUserId?: string | null
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItineraryItemUpdateWithoutTripDayInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    placeName?: NullableStringFieldUpdateOperationsInput | string | null
    placeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItineraryItemUncheckedUpdateWithoutTripDayInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    placeName?: NullableStringFieldUpdateOperationsInput | string | null
    placeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItineraryItemUncheckedUpdateManyWithoutTripDayInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    placeName?: NullableStringFieldUpdateOperationsInput | string | null
    placeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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