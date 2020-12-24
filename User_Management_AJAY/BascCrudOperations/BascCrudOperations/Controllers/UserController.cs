using BascCrudOperations.Common;
using BascCrudOperations.Core;
using BascCrudOperations.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using log4net;

namespace BascCrudOperations.Controllers
{
   // [RoutePrefix("User")]
    public class UserController : ApiController
    {
        #region Private Variable
        IUserService _IUserService;
        ILog _log= log4net.LogManager.GetLogger(typeof(UserController));
        #endregion
        #region Constructor
        public UserController(IUserService IUserService)//, ILog log)
        {
            _IUserService = IUserService;
           // _log = log;
        }
        #endregion
        [HttpGet]
        public ApiResponse<MT_USER_INFO> GetUserInfo() {            
            var result = _IUserService.GetUserInfo();
            return result;
        }
        [HttpPost]
        public ApiResponse<long> InsertUserInfo(MT_USER_INFO User) {
            var result = _IUserService.InsertUserInfo(User);
            return result;
        }

        [HttpPut]
        public ApiResponse<long> UpdateUserInfo(MT_USER_INFO User)
        {
            var result = _IUserService.UpdateUserInfo(User);
            return result;
        }
                
        [HttpDelete]//, Route("DeleteUser/{UserID}")]
        public ApiResponse<long> DeleteUserInfo(string UserID)
        {
            var result = _IUserService.DeleteUserInfo(UserID);
            return result;
        }
    }
}
