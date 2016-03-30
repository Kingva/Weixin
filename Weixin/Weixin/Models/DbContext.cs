using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Weixin.Models
{
    public class AdAuditingContext : DbContext
    {
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx

        public AdAuditingContext() : base("name=AdAuditingContexta")
        {
        }

//        public DbSet<Material> Materials { get; set; }
//        public DbSet<AdClassification> AdClassifications { get; set; }
//        public DbSet<AuditComments> AuditComments { get; set; }
//        public DbSet<AuditRound> AuditRound { get; set; }
//        public DbSet<AuditingResult> AuditingResult { get; set; }
//        public DbSet<LegalProvision> LegalProvision { get; set; }
//        public DbSet<MediaOwnerGroup> MediaOwnerGroup { get; set; }

    }
}
