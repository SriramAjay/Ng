using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BascCrudOperations.Common
{
   
        public class ApiResponse<UserData>
        {
            public int StatType { get; set; }
            public long StatusCode { get; set; }
            public string StatusMessage { get; set; }
            public string ExceptionMessage { get; set; }
            public UserData Data { get; set; }
            public IList<UserData> DataList { get; set; }
            public object DataVariable { get; set; }
            public Dictionary<string, Object> DataDictionary { get; set; }
        }
   
}