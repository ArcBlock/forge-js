value = "ChlVbmxpbWl0ZWQgVmVuZGluZyBNYWNoaW5lEJ-NBhoJCgcjhvJvwQAAIid7Im5hbWUiOiJ7e25hbWV9fSIsImJyYW5kIjoie3ticmFuZH19In0qBG5hbWUqBWJyYW5kMgVTdG9jazoA" |> Base.url_decode64!(padding: false)
type_url = "fg:x:asset_factory"
data = %{ type_url: type_url, value: value }
state = %{ data: data, address: "zjdtF741GPhFr24Jk2vPqyMaaqoWwbLZ1vdy" }
spec = %{ address: "zjdjAb5ktRXaUUk6HrdoGX8M5vipikXr3iNb", data: "{\"name\":\"Coca\",\"brand\":\"Pepsi\"}" }
factory_state = ForgeAbi.decode_any!(state.data)
mod = Module.concat("ForgeAbi", factory_state.asset_name)
Code.ensure_loaded?(mod)
args = Jason.decode!(spec.data)

tpl_data = factory_state.template |> :bbmustache.render(args, key_type: :binary) |> Jason.decode!(keys: :atoms!)

itx_data = ForgeAbi.encode_any!(mod.new(tpl_data))

params = factory_state.attributes |> Map.from_struct() |> Map.merge(%{data: itx_data, parent: state.address, readonly: true})

tmp_itx = apply(ForgeAbi.CreateAssetTx, :new, [params])
ForgeSdk.Util.to_asset_address(tmp_itx) === spec.address
