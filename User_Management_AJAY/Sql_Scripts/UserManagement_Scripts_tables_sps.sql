CREATE DATABASE USERINFO;

USE USERINFO

SELECT * FROM [MT_USER_INFO]

CREATE TABLE [MT_USER_INFO] (
	[USER_ID] [nvarchar](20) NOT NULL,
 	[FIRST_NAME] [nvarchar](20) NULL,
	[LAST_NAME] [nvarchar](20) NULL,
	[EMAIL_ID] [nvarchar](50) NULL,
	[GENDER] [nvarchar](10) NULL,
	[PHONE_NUMBER] [nvarchar](15) NULL
	CONSTRAINT [PK_MT_USER_INFO] PRIMARY KEY  CLUSTERED 
	(
		[USER_ID]
	)  ON [PRIMARY] 
) ON [PRIMARY]
 
GO
IF object_id('Sp_GetUserInfo') IS NOT NULL
DROP PROCEDURE Sp_GetUserInfo
GO
 CREATE PROCEDURE Sp_GetUserInfo

 AS
 BEGIN
    SELECT [USER_ID], [FIRST_NAME], [LAST_NAME], [EMAIL_ID], [GENDER], [PHONE_NUMBER] FROM [MT_USER_INFO]
 END
 GO
 IF object_id('Sp_DeleteUserInfo') IS NOT NULL
DROP PROCEDURE Sp_DeleteUserInfo
GO
 CREATE PROCEDURE Sp_DeleteUserInfo
 @UserId [NVARCHAR](20)
 AS
 BEGIN
    DELETE FROM [MT_USER_INFO] WHERE USER_ID = @UserId
 END
GO
IF object_id('Sp_InserUserInfo') IS NOT NULL
DROP PROCEDURE Sp_InserUserInfo
GO
 CREATE PROCEDURE Sp_InserUserInfo
 @UserID NVARCHAR(20),
 @FirstName NVARCHAR(20),
 @LastName NVARCHAR(20),
 @EmailID NVARCHAR(50),
 @Gender NVARCHAR(10),
 @PhoneNumber NVARCHAR(15)
 AS
 BEGIN
     INSERT INTO [MT_USER_INFO] ([USER_ID], [FIRST_NAME], [LAST_NAME], [EMAIL_ID], [GENDER], [PHONE_NUMBER])
	  VALUES (@UserID, @FirstName, @LastName, @EmailID, @Gender, @PhoneNumber)
 END
 GO
 IF object_id('Sp_UpdateUserInfo') IS NOT NULL
DROP PROCEDURE Sp_UpdateUserInfo
GO
 CREATE PROCEDURE Sp_UpdateUserInfo
  @UserID NVARCHAR(20),
 @FirstName NVARCHAR(20),
 @LastName NVARCHAR(20),
 @EmailID NVARCHAR(50),
 @Gender NVARCHAR(10),
 @PhoneNumber NVARCHAR(15)
 AS
 BEGIN
    UPDATE [MT_USER_INFO] 
	SET 
	 [FIRST_NAME] =@FirstName , 
	 [LAST_NAME] = @LastName , 
	 [EMAIL_ID] = @EmailID ,
	 [GENDER] = @Gender , 
	 [PHONE_NUMBER] = @PhoneNumber  
	 WHERE USER_ID = @UserID
 END
 GO
 IF object_id('Sp_IsUserExist') IS NOT NULL
DROP PROCEDURE Sp_IsUserExist
GO
 CREATE PROCEDURE Sp_IsUserExist
  @UserID NVARCHAR(20)
 AS
 BEGIN
    SELECT COUNT(USER_ID) FROM MT_USER_INFO  
	 WHERE USER_ID = @UserID
 END