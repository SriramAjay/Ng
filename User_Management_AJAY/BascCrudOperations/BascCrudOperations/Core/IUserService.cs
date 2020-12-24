using BascCrudOperations.Common;
using BascCrudOperations.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BascCrudOperations.Core
{
   public interface IUserService
    {
        ApiResponse<MT_USER_INFO> GetUserInfo();
        ApiResponse<long> InsertUserInfo(MT_USER_INFO user);
        ApiResponse<long> UpdateUserInfo(MT_USER_INFO user);

        ApiResponse<long> DeleteUserInfo(string Userid);
    }
}
