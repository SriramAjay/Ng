using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BascCrudOperations.Common
{
    public static class UserWebEnums
    {
        public enum StatusType
        {
            Error = 1,
            Warn = 2,
            Custom = 3,
            Success = 4
        }

        public const string QUERY = " Query: ";
        public const string EXCEPTION = "Exception: ";

        public const long USER_SUCCESS = 0;
        public const long NO_RECORDS_FOUND = 112200;
        public const long E_SERVER_ERROR = 112201;
        public const long USER_EXIST = 112202;

    }
}