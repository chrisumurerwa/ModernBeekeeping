# andasy.hcl app configuration file generated for beekeping on Tuesday, 05-Aug-25 19:14:16 CAT
#
# See https://github.com/quarksgroup/andasy-cli for information about how to use this file.

app_name = "beekeping"

app {

  env = {
    HOST = "::"
  }

  port = 3000

  compute {
    cpu      = 1
    memory   = 256
    cpu_kind = "shared"
  }

  process {
    name = "beekeping"
  }

}
