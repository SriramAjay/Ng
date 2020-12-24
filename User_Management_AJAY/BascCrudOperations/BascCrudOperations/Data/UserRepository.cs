using BascCrudOperations.Common;
using BascCrudOperations.Core;
using log4net;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace BascCrudOperations.Data
{
    public class UserRepository : IUserRepository
    {
        ILog _log = log4net.LogManager.GetLogger(typeof(UserRepository));
        public List<MT_USER_INFO> GetUserInfo()
        {
            string methodBaseName = string.Empty;
            if (_log.IsInfoEnabled)
            {
                methodBaseName = string.Format("{0}:", System.Reflection.MethodBase.GetCurrentMethod().Name);
                if (_log.IsDebugEnabled) { _log.Debug(methodBaseName); }
            }

            string sbSql = string.Empty;
            try
            {
                using (USERINFOEntities context = new USERINFOEntities())
                {
                    sbSql = "EXEC Sp_GetUserInfo ";
                    if (_log.IsInfoEnabled) { _log.Info($"{methodBaseName} : {UserWebEnums.QUERY} : {sbSql.ToString()}"); }

                    var lstAppParameters = context.Database.SqlQuery<MT_USER_INFO>(sbSql).ToList();
                    return lstAppParameters;

                }

            }
            catch (Exception ex)
            {

                if (_log.IsFatalEnabled) { _log.Fatal(string.Format("{0}\n{1}:", UserWebEnums.EXCEPTION + ex.ToString(), UserWebEnums.QUERY + sbSql.ToString())); }
                throw ex;
            }


        }

        public long InsertUserInfo(MT_USER_INFO user)
        {
            string methodBaseName = string.Empty;
            if (_log.IsInfoEnabled)
            {
                methodBaseName = string.Format("{0}:", System.Reflection.MethodBase.GetCurrentMethod().Name);
                if (_log.IsDebugEnabled) { _log.Debug(methodBaseName); }
            }

            string sbSql = string.Empty;
            try
            {
                using (USERINFOEntities context = new USERINFOEntities())
                {
                    SqlParameter pUserID = new SqlParameter("@UserID", System.Data.SqlDbType.NVarChar);
                    pUserID.Value = user.USER_ID;

                    SqlParameter pFirstName = new SqlParameter("@FirstName", System.Data.SqlDbType.NVarChar);
                    pFirstName.Value = user.FIRST_NAME;

                    SqlParameter pLastName = new SqlParameter("@LastName", System.Data.SqlDbType.NVarChar);
                    pLastName.Value = user.LAST_NAME;

                    SqlParameter pEmailID = new SqlParameter("@EmailID", System.Data.SqlDbType.NVarChar);
                    pEmailID.Value = user.EMAIL_ID;

                    SqlParameter pGender = new SqlParameter("@Gender", System.Data.SqlDbType.NVarChar);
                    pGender.Value = user.GENDER;

                    SqlParameter pPhoneNumber = new SqlParameter("@PhoneNumber", System.Data.SqlDbType.NVarChar);
                    pPhoneNumber.Value = user.PHONE_NUMBER;

                    object[] parameters = { pUserID, pFirstName, pLastName, pEmailID, pGender, pPhoneNumber };

                    sbSql = "EXEC Sp_InserUserInfo @UserID, @FirstName, @LastName, @EmailID, @Gender, @PhoneNumber";
                    
                    if (_log.IsInfoEnabled){ _log.Info($"{methodBaseName}:{UserWebEnums.QUERY}:Exec Sp_InserUserInfo {pUserID.Value},{pFirstName.Value}," +
                        $"{pLastName.Value},{pEmailID.Value},{pGender.Value},{pPhoneNumber.Value} "); }

                    context.Database.ExecuteSqlCommand(sbSql, parameters);

                    return UserWebEnums.USER_SUCCESS;
                }

            }
            catch (Exception ex)
            {
                if (_log.IsFatalEnabled) { _log.Fatal(string.Format("{0}\n{1}:", UserWebEnums.EXCEPTION + ex.ToString(), UserWebEnums.QUERY + sbSql.ToString())); }
                throw ex;
            }

        }

        public int IsUserExist(MT_USER_INFO user) {
            string methodBaseName = string.Empty;
            if (_log.IsInfoEnabled)
            {
                methodBaseName = string.Format("{0}:", System.Reflection.MethodBase.GetCurrentMethod().Name);
                if (_log.IsDebugEnabled) { _log.Debug(methodBaseName); }
            }
            string sbSql = string.Empty;
            
            try
            {
                using (USERINFOEntities context = new USERINFOEntities())
                {
                    SqlParameter pUserID = new SqlParameter("@UserID", System.Data.SqlDbType.NVarChar);
                    pUserID.Value = user.USER_ID;

                   
                    object[] parameters = { pUserID};

                    sbSql = "EXEC Sp_IsUserExist @UserID";

                    if (_log.IsInfoEnabled)
                    {
                        _log.Info($"{methodBaseName}:{UserWebEnums.QUERY}: Exec Sp_IsUserExist {pUserID.Value}");
                    }                   
                    var count = context.Database.SqlQuery<int>(sbSql.ToString(), parameters).FirstOrDefault();
                    return count;
                }

            }
            catch (Exception ex)
            {

                if (_log.IsFatalEnabled) { _log.Fatal(string.Format("{0}\n{1}:", UserWebEnums.EXCEPTION + ex.ToString(), UserWebEnums.QUERY + sbSql.ToString())); }
                throw ex;
            }
        }
        public long UpdateUserInfo(MT_USER_INFO user)
        {
            string methodBaseName = string.Empty;
            if (_log.IsInfoEnabled)
            {
                methodBaseName = string.Format("{0}:", System.Reflection.MethodBase.GetCurrentMethod().Name);
                if (_log.IsDebugEnabled) { _log.Debug(methodBaseName); }
            }
            string sbSql = string.Empty;
            try
            {
                using (USERINFOEntities context = new USERINFOEntities())
                {
                    SqlParameter pUserID = new SqlParameter("@UserID", System.Data.SqlDbType.NVarChar);
                    pUserID.Value = user.USER_ID;

                    SqlParameter pFirstName = new SqlParameter("@FirstName", System.Data.SqlDbType.NVarChar);
                    pFirstName.Value = user.FIRST_NAME;

                    SqlParameter pLastName = new SqlParameter("@LastName", System.Data.SqlDbType.NVarChar);
                    pLastName.Value = user.LAST_NAME;

                    SqlParameter pEmailID = new SqlParameter("@EmailID", System.Data.SqlDbType.NVarChar);
                    pEmailID.Value = user.EMAIL_ID;

                    SqlParameter pGender = new SqlParameter("@Gender", System.Data.SqlDbType.NVarChar);
                    pGender.Value = user.GENDER;

                    SqlParameter pPhoneNumber = new SqlParameter("@PhoneNumber", System.Data.SqlDbType.NVarChar);
                    pPhoneNumber.Value = user.PHONE_NUMBER;

                    object[] parameters = { pUserID, pFirstName, pLastName, pEmailID, pGender, pPhoneNumber };

                    sbSql = "EXEC Sp_UpdateUserInfo @UserID, @FirstName, @LastName, @EmailID, @Gender, @PhoneNumber";

                    if (_log.IsInfoEnabled)
                    {
                        _log.Info($"{methodBaseName}:{UserWebEnums.QUERY}: Exec Sp_UpdateUserInfo {pUserID.Value},{pFirstName.Value}," +
                            $"{pLastName.Value},{pEmailID.Value},{pGender.Value},{pPhoneNumber.Value} ");
                    }

                    context.Database.ExecuteSqlCommand(sbSql, parameters);

                    return UserWebEnums.USER_SUCCESS;
                }

            }
            catch (Exception ex)
            {

                if (_log.IsFatalEnabled) { _log.Fatal(string.Format("{0}\n{1}:", UserWebEnums.EXCEPTION + ex.ToString(), UserWebEnums.QUERY + sbSql.ToString())); }
                throw ex;
            }
        }
        public long DeleteUserInfo(string UserID)
        {
            string methodBaseName = string.Empty;
            if (_log.IsInfoEnabled)
            {
                methodBaseName = string.Format("{0}:", System.Reflection.MethodBase.GetCurrentMethod().Name);
                if (_log.IsDebugEnabled) { _log.Debug(methodBaseName); }
            }
            string sbSql = string.Empty;
            try
            {
                using (USERINFOEntities context = new USERINFOEntities())
                {
                    SqlParameter pUserID = new SqlParameter("@UserID", System.Data.SqlDbType.NVarChar);
                    pUserID.Value = UserID;
                    
                    object[] parameters = { pUserID };

                    sbSql = "EXEC Sp_DeleteUserInfo @UserID";
                    if (_log.IsInfoEnabled)
                    {
                        _log.Info($"{methodBaseName}:{UserWebEnums.QUERY}:Exec Sp_DeleteUserInfo {pUserID.Value}");
                    }
                    context.Database.ExecuteSqlCommand(sbSql, parameters);

                    return UserWebEnums.USER_SUCCESS;
                }

            }
            catch (Exception ex)
            {

                if (_log.IsFatalEnabled) { _log.Fatal(string.Format("{0}\n{1}:", UserWebEnums.EXCEPTION + ex.ToString(), UserWebEnums.QUERY + sbSql.ToString())); }
                throw ex;
            }
        }
    }
}