import React, { ReactElement } from "react"
import { useAuthUser } from "../../hooks/useAuthUser"
import { supabase } from "../../../supabaseClient"

function SignIn(): ReactElement {
  const user = useAuthUser()

  async function signInWithGithub() {
    await supabase.auth.signIn(
      {
        provider: "github",
      },
      {
        redirectTo: window.location.href,
      }
    )
  }
  async function signOut() {
    await supabase.auth.signOut()
  }
  return user ? (
    <button type="button" className="btn btn-light" onClick={signOut}>
      Sign out
    </button>
  ) : (
    <button type="button" className="btn btn-light" onClick={signInWithGithub}>
      Sign In
    </button>
  )
}
export { SignIn }
