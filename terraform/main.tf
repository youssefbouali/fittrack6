locals {
  app_name_lower = lower(var.app_name)
  common_tags = merge(
    var.tags,
    {
      ManagedBy = "Terraform"
      CreatedAt = timestamp()
    }
  )
}

# Null resource for outputs
# In main.tf, replace the null_resource with:
resource "null_resource" "deployment_summary" {
  provisioner "local-exec" {
    command = "echo 'FitTrack infrastructure deployment complete!'"
  }
}
