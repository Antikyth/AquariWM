(function() {var implementors = {};
implementors["once_cell"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"once_cell/race/struct.OnceBox.html\" title=\"struct once_cell::race::OnceBox\">OnceBox</a>&lt;T&gt;","synthetic":false,"types":["once_cell::race::once_box::OnceBox"]}];
implementors["sharded_slab"] = [{"text":"impl&lt;'a, T, C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"sharded_slab/pool/struct.Ref.html\" title=\"struct sharded_slab::pool::Ref\">Ref</a>&lt;'a, T, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"sharded_slab/trait.Clear.html\" title=\"trait sharded_slab::Clear\">Clear</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"sharded_slab/trait.Config.html\" title=\"trait sharded_slab::Config\">Config</a>,&nbsp;</span>","synthetic":false,"types":["sharded_slab::pool::Ref"]},{"text":"impl&lt;'a, T, C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"sharded_slab/pool/struct.RefMut.html\" title=\"struct sharded_slab::pool::RefMut\">RefMut</a>&lt;'a, T, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"sharded_slab/trait.Clear.html\" title=\"trait sharded_slab::Clear\">Clear</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"sharded_slab/trait.Config.html\" title=\"trait sharded_slab::Config\">Config</a>,&nbsp;</span>","synthetic":false,"types":["sharded_slab::pool::RefMut"]},{"text":"impl&lt;T, C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"sharded_slab/pool/struct.OwnedRef.html\" title=\"struct sharded_slab::pool::OwnedRef\">OwnedRef</a>&lt;T, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"sharded_slab/trait.Clear.html\" title=\"trait sharded_slab::Clear\">Clear</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"sharded_slab/trait.Config.html\" title=\"trait sharded_slab::Config\">Config</a>,&nbsp;</span>","synthetic":false,"types":["sharded_slab::pool::OwnedRef"]},{"text":"impl&lt;T, C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"sharded_slab/pool/struct.OwnedRefMut.html\" title=\"struct sharded_slab::pool::OwnedRefMut\">OwnedRefMut</a>&lt;T, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"sharded_slab/trait.Clear.html\" title=\"trait sharded_slab::Clear\">Clear</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"sharded_slab/trait.Config.html\" title=\"trait sharded_slab::Config\">Config</a>,&nbsp;</span>","synthetic":false,"types":["sharded_slab::pool::OwnedRefMut"]},{"text":"impl&lt;'a, T, C:&nbsp;<a class=\"trait\" href=\"sharded_slab/trait.Config.html\" title=\"trait sharded_slab::Config\">Config</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"sharded_slab/struct.Entry.html\" title=\"struct sharded_slab::Entry\">Entry</a>&lt;'a, T, C&gt;","synthetic":false,"types":["sharded_slab::Entry"]},{"text":"impl&lt;T, C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"sharded_slab/struct.OwnedEntry.html\" title=\"struct sharded_slab::OwnedEntry\">OwnedEntry</a>&lt;T, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"sharded_slab/trait.Config.html\" title=\"trait sharded_slab::Config\">Config</a>,&nbsp;</span>","synthetic":false,"types":["sharded_slab::OwnedEntry"]}];
implementors["smallvec"] = [{"text":"impl&lt;'a, T:&nbsp;'a + <a class=\"trait\" href=\"smallvec/trait.Array.html\" title=\"trait smallvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"smallvec/struct.Drain.html\" title=\"struct smallvec::Drain\">Drain</a>&lt;'a, T&gt;","synthetic":false,"types":["smallvec::Drain"]},{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"smallvec/trait.Array.html\" title=\"trait smallvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"smallvec/struct.SmallVec.html\" title=\"struct smallvec::SmallVec\">SmallVec</a>&lt;A&gt;","synthetic":false,"types":["smallvec::SmallVec"]},{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"smallvec/trait.Array.html\" title=\"trait smallvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"smallvec/struct.IntoIter.html\" title=\"struct smallvec::IntoIter\">IntoIter</a>&lt;A&gt;","synthetic":false,"types":["smallvec::IntoIter"]}];
implementors["syn"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"syn/buffer/struct.TokenBuffer.html\" title=\"struct syn::buffer::TokenBuffer\">TokenBuffer</a>","synthetic":false,"types":["syn::buffer::TokenBuffer"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"syn/parse/struct.ParseBuffer.html\" title=\"struct syn::parse::ParseBuffer\">ParseBuffer</a>&lt;'a&gt;","synthetic":false,"types":["syn::parse::ParseBuffer"]}];
implementors["thread_local"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"thread_local/struct.ThreadLocal.html\" title=\"struct thread_local::ThreadLocal\">ThreadLocal</a>&lt;T&gt;","synthetic":false,"types":["thread_local::ThreadLocal"]}];
implementors["tracing"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"tracing/struct.Span.html\" title=\"struct tracing::Span\">Span</a>","synthetic":false,"types":["tracing::span::Span"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"tracing/span/struct.Entered.html\" title=\"struct tracing::span::Entered\">Entered</a>&lt;'a&gt;","synthetic":false,"types":["tracing::span::Entered"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"tracing/span/struct.EnteredSpan.html\" title=\"struct tracing::span::EnteredSpan\">EnteredSpan</a>","synthetic":false,"types":["tracing::span::EnteredSpan"]}];
implementors["tracing_core"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"tracing_core/dispatcher/struct.DefaultGuard.html\" title=\"struct tracing_core::dispatcher::DefaultGuard\">DefaultGuard</a>","synthetic":false,"types":["tracing_core::dispatcher::DefaultGuard"]}];
implementors["xcb"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/struct.Connection.html\" title=\"struct xcb::Connection\">Connection</a>","synthetic":false,"types":["xcb::base::Connection"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/struct.UnknownEvent.html\" title=\"struct xcb::UnknownEvent\">UnknownEvent</a>","synthetic":false,"types":["xcb::event::UnknownEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.RequestError.html\" title=\"struct xcb::x::RequestError\">RequestError</a>","synthetic":false,"types":["xcb::xproto::RequestError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.ValueError.html\" title=\"struct xcb::x::ValueError\">ValueError</a>","synthetic":false,"types":["xcb::xproto::ValueError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.KeyPressEvent.html\" title=\"struct xcb::x::KeyPressEvent\">KeyPressEvent</a>","synthetic":false,"types":["xcb::xproto::KeyPressEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.ButtonPressEvent.html\" title=\"struct xcb::x::ButtonPressEvent\">ButtonPressEvent</a>","synthetic":false,"types":["xcb::xproto::ButtonPressEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.MotionNotifyEvent.html\" title=\"struct xcb::x::MotionNotifyEvent\">MotionNotifyEvent</a>","synthetic":false,"types":["xcb::xproto::MotionNotifyEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.EnterNotifyEvent.html\" title=\"struct xcb::x::EnterNotifyEvent\">EnterNotifyEvent</a>","synthetic":false,"types":["xcb::xproto::EnterNotifyEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.FocusInEvent.html\" title=\"struct xcb::x::FocusInEvent\">FocusInEvent</a>","synthetic":false,"types":["xcb::xproto::FocusInEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.KeymapNotifyEvent.html\" title=\"struct xcb::x::KeymapNotifyEvent\">KeymapNotifyEvent</a>","synthetic":false,"types":["xcb::xproto::KeymapNotifyEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.ExposeEvent.html\" title=\"struct xcb::x::ExposeEvent\">ExposeEvent</a>","synthetic":false,"types":["xcb::xproto::ExposeEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.GraphicsExposureEvent.html\" title=\"struct xcb::x::GraphicsExposureEvent\">GraphicsExposureEvent</a>","synthetic":false,"types":["xcb::xproto::GraphicsExposureEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.NoExposureEvent.html\" title=\"struct xcb::x::NoExposureEvent\">NoExposureEvent</a>","synthetic":false,"types":["xcb::xproto::NoExposureEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.VisibilityNotifyEvent.html\" title=\"struct xcb::x::VisibilityNotifyEvent\">VisibilityNotifyEvent</a>","synthetic":false,"types":["xcb::xproto::VisibilityNotifyEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.CreateNotifyEvent.html\" title=\"struct xcb::x::CreateNotifyEvent\">CreateNotifyEvent</a>","synthetic":false,"types":["xcb::xproto::CreateNotifyEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.DestroyNotifyEvent.html\" title=\"struct xcb::x::DestroyNotifyEvent\">DestroyNotifyEvent</a>","synthetic":false,"types":["xcb::xproto::DestroyNotifyEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.UnmapNotifyEvent.html\" title=\"struct xcb::x::UnmapNotifyEvent\">UnmapNotifyEvent</a>","synthetic":false,"types":["xcb::xproto::UnmapNotifyEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.MapNotifyEvent.html\" title=\"struct xcb::x::MapNotifyEvent\">MapNotifyEvent</a>","synthetic":false,"types":["xcb::xproto::MapNotifyEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.MapRequestEvent.html\" title=\"struct xcb::x::MapRequestEvent\">MapRequestEvent</a>","synthetic":false,"types":["xcb::xproto::MapRequestEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.ReparentNotifyEvent.html\" title=\"struct xcb::x::ReparentNotifyEvent\">ReparentNotifyEvent</a>","synthetic":false,"types":["xcb::xproto::ReparentNotifyEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.ConfigureNotifyEvent.html\" title=\"struct xcb::x::ConfigureNotifyEvent\">ConfigureNotifyEvent</a>","synthetic":false,"types":["xcb::xproto::ConfigureNotifyEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.ConfigureRequestEvent.html\" title=\"struct xcb::x::ConfigureRequestEvent\">ConfigureRequestEvent</a>","synthetic":false,"types":["xcb::xproto::ConfigureRequestEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.GravityNotifyEvent.html\" title=\"struct xcb::x::GravityNotifyEvent\">GravityNotifyEvent</a>","synthetic":false,"types":["xcb::xproto::GravityNotifyEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.ResizeRequestEvent.html\" title=\"struct xcb::x::ResizeRequestEvent\">ResizeRequestEvent</a>","synthetic":false,"types":["xcb::xproto::ResizeRequestEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.CirculateNotifyEvent.html\" title=\"struct xcb::x::CirculateNotifyEvent\">CirculateNotifyEvent</a>","synthetic":false,"types":["xcb::xproto::CirculateNotifyEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.PropertyNotifyEvent.html\" title=\"struct xcb::x::PropertyNotifyEvent\">PropertyNotifyEvent</a>","synthetic":false,"types":["xcb::xproto::PropertyNotifyEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.SelectionClearEvent.html\" title=\"struct xcb::x::SelectionClearEvent\">SelectionClearEvent</a>","synthetic":false,"types":["xcb::xproto::SelectionClearEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.SelectionRequestEvent.html\" title=\"struct xcb::x::SelectionRequestEvent\">SelectionRequestEvent</a>","synthetic":false,"types":["xcb::xproto::SelectionRequestEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.SelectionNotifyEvent.html\" title=\"struct xcb::x::SelectionNotifyEvent\">SelectionNotifyEvent</a>","synthetic":false,"types":["xcb::xproto::SelectionNotifyEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.ColormapNotifyEvent.html\" title=\"struct xcb::x::ColormapNotifyEvent\">ColormapNotifyEvent</a>","synthetic":false,"types":["xcb::xproto::ColormapNotifyEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.ClientMessageEvent.html\" title=\"struct xcb::x::ClientMessageEvent\">ClientMessageEvent</a>","synthetic":false,"types":["xcb::xproto::ClientMessageEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.MappingNotifyEvent.html\" title=\"struct xcb::x::MappingNotifyEvent\">MappingNotifyEvent</a>","synthetic":false,"types":["xcb::xproto::MappingNotifyEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.GetWindowAttributesReply.html\" title=\"struct xcb::x::GetWindowAttributesReply\">GetWindowAttributesReply</a>","synthetic":false,"types":["xcb::xproto::GetWindowAttributesReply"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.GetGeometryReply.html\" title=\"struct xcb::x::GetGeometryReply\">GetGeometryReply</a>","synthetic":false,"types":["xcb::xproto::GetGeometryReply"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.QueryTreeReply.html\" title=\"struct xcb::x::QueryTreeReply\">QueryTreeReply</a>","synthetic":false,"types":["xcb::xproto::QueryTreeReply"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.InternAtomReply.html\" title=\"struct xcb::x::InternAtomReply\">InternAtomReply</a>","synthetic":false,"types":["xcb::xproto::InternAtomReply"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.GetAtomNameReply.html\" title=\"struct xcb::x::GetAtomNameReply\">GetAtomNameReply</a>","synthetic":false,"types":["xcb::xproto::GetAtomNameReply"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.GetPropertyReply.html\" title=\"struct xcb::x::GetPropertyReply\">GetPropertyReply</a>","synthetic":false,"types":["xcb::xproto::GetPropertyReply"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.ListPropertiesReply.html\" title=\"struct xcb::x::ListPropertiesReply\">ListPropertiesReply</a>","synthetic":false,"types":["xcb::xproto::ListPropertiesReply"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.GetSelectionOwnerReply.html\" title=\"struct xcb::x::GetSelectionOwnerReply\">GetSelectionOwnerReply</a>","synthetic":false,"types":["xcb::xproto::GetSelectionOwnerReply"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.GrabPointerReply.html\" title=\"struct xcb::x::GrabPointerReply\">GrabPointerReply</a>","synthetic":false,"types":["xcb::xproto::GrabPointerReply"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.GrabKeyboardReply.html\" title=\"struct xcb::x::GrabKeyboardReply\">GrabKeyboardReply</a>","synthetic":false,"types":["xcb::xproto::GrabKeyboardReply"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.QueryPointerReply.html\" title=\"struct xcb::x::QueryPointerReply\">QueryPointerReply</a>","synthetic":false,"types":["xcb::xproto::QueryPointerReply"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.GetMotionEventsReply.html\" title=\"struct xcb::x::GetMotionEventsReply\">GetMotionEventsReply</a>","synthetic":false,"types":["xcb::xproto::GetMotionEventsReply"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.TranslateCoordinatesReply.html\" title=\"struct xcb::x::TranslateCoordinatesReply\">TranslateCoordinatesReply</a>","synthetic":false,"types":["xcb::xproto::TranslateCoordinatesReply"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.GetInputFocusReply.html\" title=\"struct xcb::x::GetInputFocusReply\">GetInputFocusReply</a>","synthetic":false,"types":["xcb::xproto::GetInputFocusReply"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.QueryKeymapReply.html\" title=\"struct xcb::x::QueryKeymapReply\">QueryKeymapReply</a>","synthetic":false,"types":["xcb::xproto::QueryKeymapReply"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.QueryFontReply.html\" title=\"struct xcb::x::QueryFontReply\">QueryFontReply</a>","synthetic":false,"types":["xcb::xproto::QueryFontReply"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.QueryTextExtentsReply.html\" title=\"struct xcb::x::QueryTextExtentsReply\">QueryTextExtentsReply</a>","synthetic":false,"types":["xcb::xproto::QueryTextExtentsReply"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.ListFontsReply.html\" title=\"struct xcb::x::ListFontsReply\">ListFontsReply</a>","synthetic":false,"types":["xcb::xproto::ListFontsReply"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.ListFontsWithInfoReply.html\" title=\"struct xcb::x::ListFontsWithInfoReply\">ListFontsWithInfoReply</a>","synthetic":false,"types":["xcb::xproto::ListFontsWithInfoReply"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.GetFontPathReply.html\" title=\"struct xcb::x::GetFontPathReply\">GetFontPathReply</a>","synthetic":false,"types":["xcb::xproto::GetFontPathReply"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.GetImageReply.html\" title=\"struct xcb::x::GetImageReply\">GetImageReply</a>","synthetic":false,"types":["xcb::xproto::GetImageReply"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.ListInstalledColormapsReply.html\" title=\"struct xcb::x::ListInstalledColormapsReply\">ListInstalledColormapsReply</a>","synthetic":false,"types":["xcb::xproto::ListInstalledColormapsReply"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.AllocColorReply.html\" title=\"struct xcb::x::AllocColorReply\">AllocColorReply</a>","synthetic":false,"types":["xcb::xproto::AllocColorReply"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.AllocNamedColorReply.html\" title=\"struct xcb::x::AllocNamedColorReply\">AllocNamedColorReply</a>","synthetic":false,"types":["xcb::xproto::AllocNamedColorReply"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.AllocColorCellsReply.html\" title=\"struct xcb::x::AllocColorCellsReply\">AllocColorCellsReply</a>","synthetic":false,"types":["xcb::xproto::AllocColorCellsReply"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.AllocColorPlanesReply.html\" title=\"struct xcb::x::AllocColorPlanesReply\">AllocColorPlanesReply</a>","synthetic":false,"types":["xcb::xproto::AllocColorPlanesReply"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.QueryColorsReply.html\" title=\"struct xcb::x::QueryColorsReply\">QueryColorsReply</a>","synthetic":false,"types":["xcb::xproto::QueryColorsReply"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.LookupColorReply.html\" title=\"struct xcb::x::LookupColorReply\">LookupColorReply</a>","synthetic":false,"types":["xcb::xproto::LookupColorReply"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.QueryBestSizeReply.html\" title=\"struct xcb::x::QueryBestSizeReply\">QueryBestSizeReply</a>","synthetic":false,"types":["xcb::xproto::QueryBestSizeReply"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.QueryExtensionReply.html\" title=\"struct xcb::x::QueryExtensionReply\">QueryExtensionReply</a>","synthetic":false,"types":["xcb::xproto::QueryExtensionReply"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.ListExtensionsReply.html\" title=\"struct xcb::x::ListExtensionsReply\">ListExtensionsReply</a>","synthetic":false,"types":["xcb::xproto::ListExtensionsReply"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.GetKeyboardMappingReply.html\" title=\"struct xcb::x::GetKeyboardMappingReply\">GetKeyboardMappingReply</a>","synthetic":false,"types":["xcb::xproto::GetKeyboardMappingReply"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.GetKeyboardControlReply.html\" title=\"struct xcb::x::GetKeyboardControlReply\">GetKeyboardControlReply</a>","synthetic":false,"types":["xcb::xproto::GetKeyboardControlReply"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.GetPointerControlReply.html\" title=\"struct xcb::x::GetPointerControlReply\">GetPointerControlReply</a>","synthetic":false,"types":["xcb::xproto::GetPointerControlReply"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.GetScreenSaverReply.html\" title=\"struct xcb::x::GetScreenSaverReply\">GetScreenSaverReply</a>","synthetic":false,"types":["xcb::xproto::GetScreenSaverReply"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.ListHostsReply.html\" title=\"struct xcb::x::ListHostsReply\">ListHostsReply</a>","synthetic":false,"types":["xcb::xproto::ListHostsReply"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.SetPointerMappingReply.html\" title=\"struct xcb::x::SetPointerMappingReply\">SetPointerMappingReply</a>","synthetic":false,"types":["xcb::xproto::SetPointerMappingReply"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.GetPointerMappingReply.html\" title=\"struct xcb::x::GetPointerMappingReply\">GetPointerMappingReply</a>","synthetic":false,"types":["xcb::xproto::GetPointerMappingReply"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.SetModifierMappingReply.html\" title=\"struct xcb::x::SetModifierMappingReply\">SetModifierMappingReply</a>","synthetic":false,"types":["xcb::xproto::SetModifierMappingReply"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/x/struct.GetModifierMappingReply.html\" title=\"struct xcb::x::GetModifierMappingReply\">GetModifierMappingReply</a>","synthetic":false,"types":["xcb::xproto::GetModifierMappingReply"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/bigreq/struct.EnableReply.html\" title=\"struct xcb::bigreq::EnableReply\">EnableReply</a>","synthetic":false,"types":["xcb::bigreq::EnableReply"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/xc_misc/struct.GetVersionReply.html\" title=\"struct xcb::xc_misc::GetVersionReply\">GetVersionReply</a>","synthetic":false,"types":["xcb::xc_misc::GetVersionReply"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/xc_misc/struct.GetXidRangeReply.html\" title=\"struct xcb::xc_misc::GetXidRangeReply\">GetXidRangeReply</a>","synthetic":false,"types":["xcb::xc_misc::GetXidRangeReply"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"xcb/xc_misc/struct.GetXidListReply.html\" title=\"struct xcb::xc_misc::GetXidListReply\">GetXidListReply</a>","synthetic":false,"types":["xcb::xc_misc::GetXidListReply"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()