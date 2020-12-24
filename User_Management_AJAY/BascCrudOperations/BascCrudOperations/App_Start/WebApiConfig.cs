using BascCrudOperations.Business;
using BascCrudOperations.Core;
using BascCrudOperations.Data;
using System;
using System.Collections.Generic;
using BascCrudOperations.Common;
using System.Web.Http;
using Unity.AspNet.WebApi;
using Unity;
using System.Web.Http.Cors;
using UnityLog4NetExtension.Log4Net;
using log4net;

namespace BascCrudOperations
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            //string xmlData = System.Web.Hosting.HostingEnvironment.MapPath("~/Log4Net.config");
            //log4net.Config.XmlConfigurator.ConfigureAndWatch(new System.IO.FileInfo(xmlData));

            // Web API configuration and services
            // Unity configuration
            var container = new UnityContainer();
              // container.AddNewExtension(Log4NetExtension);
            
            //container.RegisterType<IRepository, CustomRepository>();
            container.RegisterType<IUserService, UserService>();
            container.RegisterType<IUserRepository, UserRepository>();
            //config.DependencyResolver = new  UnityResolver(container);          

            //this
            config.DependencyResolver = new UnityDependencyResolver(container);

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            var cors = new EnableCorsAttribute("*", "*", "*");
            config.EnableCors(cors);
        }
    }
}
