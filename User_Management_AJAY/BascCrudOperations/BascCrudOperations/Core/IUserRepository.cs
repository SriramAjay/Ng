using BascCrudOperations.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BascCrudOperations.Core
{
    public interface IUserRepository
    {
        List<MT_USER_INFO> GetUserInfo();
        int IsUserExist(MT_USER_INFO user);
        long InsertUserInfo(MT_USER_INFO user);
        long UpdateUserInfo(MT_USER_INFO user);
        long DeleteUserInfo(string Userid);
    }
}
