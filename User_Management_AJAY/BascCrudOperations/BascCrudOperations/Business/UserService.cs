using BascCrudOperations.Common;
using BascCrudOperations.Core;
using BascCrudOperations.Data;
using log4net;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BascCrudOperations.Business
{
    public class UserService: IUserService
    {
        #region Private Variables
        IUserRepository _IUserRepository;
        ILog _log= log4net.LogManager.GetLogger(typeof(UserService));
        #endregion
        #region Constructor

        public UserService(IUserRepository IUserRepository)
        {
            _IUserRepository = IUserRepository;
        }

      
        #endregion

        public ApiResponse<MT_USER_INFO> GetUserInfo()
        {
            string methodBaseName = string.Empty;
            if (_log.IsInfoEnabled)
            {
                methodBaseName = string.Format("{0}:", System.Reflection.MethodBase.GetCurrentMethod().Name);
                if (_log.IsDebugEnabled) { _log.Debug(methodBaseName); }
            }

            var response = new ApiResponse<MT_USER_INFO>();

            try
            {
               
                response.DataList = _IUserRepository.GetUserInfo();
                if (response.DataList.Count > 0)
                {
                    response.StatusCode = UserWebEnums.USER_SUCCESS;
                    return response;
                }
                else
                {
                    response.StatusCode = UserWebEnums.NO_RECORDS_FOUND;
                    return response;
                }
               
            }
            catch (Exception ex)
            {
                response.StatusCode = UserWebEnums.E_SERVER_ERROR;
                response.StatusMessage = ex.ToString();
                return response;
            }
           
        }

        public ApiResponse<long> InsertUserInfo(MT_USER_INFO user)
        {
            string methodBaseName = string.Empty;
            if (_log.IsInfoEnabled)
            {
                methodBaseName = string.Format("{0}:", System.Reflection.MethodBase.GetCurrentMethod().Name);
                if (_log.IsDebugEnabled) { _log.Debug(methodBaseName); }
            }
            var response = new ApiResponse<long>();
            try
            {
                if (_IUserRepository.IsUserExist(user) > 0)
                {
                    response.StatusCode = UserWebEnums.USER_EXIST;
                    return response;
                }
                else {
                    response.StatusCode = _IUserRepository.InsertUserInfo(user);
                    return response;
                }

                
            }
            catch (Exception ex)
            {
                response.StatusCode = UserWebEnums.E_SERVER_ERROR;
                response.StatusMessage = ex.ToString();
                return response;
            }
           
        }
        public ApiResponse<long> UpdateUserInfo(MT_USER_INFO user)
        {
            string methodBaseName = string.Empty;
            if (_log.IsInfoEnabled)
            {
                methodBaseName = string.Format("{0}:", System.Reflection.MethodBase.GetCurrentMethod().Name);
                if (_log.IsDebugEnabled) { _log.Debug(methodBaseName); }
            }
            var response = new ApiResponse<long>();

            try
            {
               
                response.StatusCode = _IUserRepository.UpdateUserInfo(user);
                return response;
            }
            catch (Exception ex)
            {

                response.StatusCode = UserWebEnums.E_SERVER_ERROR;
                response.StatusMessage = ex.ToString();
                return response;
            }

        }
        public ApiResponse<long> DeleteUserInfo(string UserID)
        {
            string methodBaseName = string.Empty;
            if (_log.IsInfoEnabled)
            {
                methodBaseName = string.Format("{0}:", System.Reflection.MethodBase.GetCurrentMethod().Name);
                if (_log.IsDebugEnabled) { _log.Debug(methodBaseName); }
            }
            var response = new ApiResponse<long>();
            try
            {
               
                response.StatusCode = _IUserRepository.DeleteUserInfo(UserID);
                return response;
            }
            catch (Exception ex)
            {

                response.StatusCode = UserWebEnums.E_SERVER_ERROR;
                response.StatusMessage = ex.ToString();
                return response;
            }

        }

    }
} 