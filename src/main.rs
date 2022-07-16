// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

///////////////////////////////////////////////////////////////////////////////////////////////////

// There are a number of resources that you may find helpful when writing this first stub.
//
// rust-xcb documentation           https://rust-x-bindings.github.io/rust-xcb/xcb/index.html
// rust-xcb github                  https://github.com/rust-x-bindings/rust-xcb
// how to write a window manager----
//              https://jich4n.com/posts/how-x-window-managers-work-and-how-to-write-one-part-i/
// ICCCM                            https://tronche.com/gui/x/icccm/
// EWMH                             https://specifications.freedesktop.org/wm-spec/latest/
// tinywm, a helpful reference      http://incise.org/tinywm.html
// the rust programming book        https://doc.rust-lang.org/stable/book/
// XCB tutorial                     https://xcb.freedesktop.org/tutorial/
// XCB window manipulation          https://xcb.freedesktop.org/windowcontextandmanipulation/

///////////////////////////////////////////////////////////////////////////////////////////////////

// The following code and features are in no way representative of what AquariWM is designed to be,
// nor what it will be for much longer. It is simply a test, to see what the implementation of
// basic window manager functions will involve...
//
// If you are reading this message, and you would like to contribute to the window manager: do feel
// free to remove all of the contents of this file and start over (but make sure to include the
// license header for the MPL-2.0). The first tasks for the real window manager design are to get
// the fundamentals of module communication set up: try to have a custom message sent through an
// IPC socket to AquariWM with information on where to put the focused window, and then have the
// AquariWM core move the focused window based on those coordinates received over IPC.

fn main() -> xcb::Result<()> {
	// connect to the X server
	let (conn, screen_num) = xcb::Connection::connect(None)?;

	// Get the `x::Screen` object from the connection's `x::Setup` with the `screen_num`.
	let screen = conn.get_setup().roots().nth(screen_num as usize).unwrap();
	// Get the screen's root window.
	let _root = screen.root();

	// The concept of a 'window manager' in X is simply a client that has permission to perform
	// substructure redirection on the root window. Only one X client is allowed to do this at
	// once. We therefore register for substructure redirection on the root window:

	// register for substructure redirection on the root window...

	// Potentially helpful example code (Rust, XCB):
	// https://github.com/mjkillough/lanta/blob/4c31f087514502f243eb15ac0f1a57072aa8779c/src/x.rs#L173
	//
	// xcb::EVENT_MASK_SUBSTRUCTURE_NOTIFY
	// xcb::EVENT_MASK_SUBSTRUCTURE_REDIRECT
	// (substructure redirect on root window with xcb::change_window_attributes_checked)

	// Next, we want to tell X what events we want to know about. We need to receive input events
	// relating to cursor movement (motion events), Super + Left Mouse Button,
	// Super + Right Mouse Button, and Super + f.

	// select mouse motion input
	// grab Super + Left Mouse Button
	// grab Super + Right Mouse Button
	// grab Super + f

	// https://docs.rs/xcb/latest/xcb/x/struct.GrabPointer.html 
	// owner_events		bool		if owner_events is true, pointer input events will still be
	//   							'processed' in the selected window, in this case the root
	//								window.
	// grab_window		Window		the window being grabbed, which is the root window in our
	//								case.
	// event_mask		EventMask	the event mask(s) to be reported to the window manager. ones
	//								that interest us include 'ENTER_WINDOW' (for 'XEnterNotify'),
	//								'BUTTON1_MOTION' (for left click and drag; maybe we can also
	//								apply a key modifier mask to it or something so that we
	//								directly grab 'Super + Left Click Drag'?), 'BUTTON3_MOTION'
	//								(which is the same thing but for right click), and
	//								'POINTER_MOTION' (motion of the pointer in general, hopefully
	//								not needed).
	// pointer_mode		GrabMode	whether to grab pointer input in synchronous mode or
	//								asynchronous mode. synchronous mode freezes the pointer input
	//								until we allow it again, asynchronous lets it continue as
	//								normal. has use for, for example, waiting until a certain
	//								setup action has been completed by the window manager, but is
	//								not the same as owner_events.
	// keyboard_mode	GrabMode	the same as pointer_mode, just in relation to keyboard input.
	// confine_to		Window		if set to a window other than 'XCB_NONE', this specifies a
	//								window which the user is not allowed to move the cursor
	//								outside of.
	// cursor			Cursor		specifies the cursor to be displayed (e.g. the hand icon when
	//								hovering over a link); maybe something like a resize cursor
	//								resizing a window? to not change the cursor, we can use
	//								'XCB_NONE'.
	// time				Timestamp	clients are given preference when grabbing based on this
	//								value. 'XCB_CURRENT_TIME' will be replaced by the current
	//								time. as we are a window manager, surely we want to always
	//								be first? or maybe no one else can even do it on the root
	//								window? I don't know, I want to let other clients to grab the
	//								pointer too, just send the events over to them after the
	//								manager has handled them, if appropriate...

	// event loop {
	// //
	// // mouse motion {
	// // // if (hovered window != focused window) focus(hovered window)
	// // }
	// //
	// // Super + Left Mouse Button -> move window
	// // Super + Right Mouse Button -> resize window
	// // Super + F -> toggle fullscreen on the window
	// //
	// }

	Ok(())
}
