<template>
	<div>
		<comp-toolbar mode="admin" />
		<v-container v-if="role === 'admin'">
			<div
				class="d-flex justify-center align-center flex-column"
				style="height: 70vh"
			>
				<v-subheader>
					You are currently logged in as an administrator
				</v-subheader>
				<v-btn color="primary" @click="logout">
					Logout
				</v-btn>
			</div>
			<v-col cols="12" md="6" offset-md="3">
				<slide-up-down :active="message.show">
					<v-alert dense text :type="message.type">
						{{ message.text }}
					</v-alert>
				</slide-up-down>
			</v-col>
		</v-container>
		<v-container class="mt-10" v-else>
			<v-row>
				<v-col cols="12" md="6" offset-md="3">
					<v-text-field
						outlined
						v-model="username"
						label="Username"
					/>
				</v-col>
				<v-col cols="12" md="6" offset-md="3">
					<v-text-field
						outlined
						v-model="password"
						label="Password"
						type="password"
					/>
				</v-col>
				<v-col cols="12" md="6" offset-md="3">
					<v-btn block color="primary" @click="login">
						Login
					</v-btn>
				</v-col>
				<v-col cols="12" md="6" offset-md="3">
					<slide-up-down :active="message.show">
						<v-alert dense text :type="message.type">
							{{ message.text }}
						</v-alert>
					</slide-up-down>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
import CompToolbar from "@/components/index/toolbar";

export default {
	components: {
		CompToolbar
	},
	data() {
		return {
			username: "",
			password: "",
			message: {
				show: false
			},
			role: null
		};
	},
	methods: {
		logout() {
			this.$axios({
				url: "/api/logout",
				method: "get"
			}).then(result => {
				this.message.type = "info";
				this.message.text = "You are now logged out. Redirecting...";
				this.message.show = true;
				setTimeout(() => {
					this.$router.push("/");
				}, 2000);
			});
		},
		login() {
			this.$axios({
				url: "/api/login",
				method: "post",
				data: {
					username: this.username,
					password: this.password
				}
			})
				.then(res => {
					this.message.type = "success";
					this.message.text = "Login successful. Redirecting...";
					this.message.show = true;
					setTimeout(() => {
						this.$router.push("/");
					}, 5000);
				})
				.catch(err => {
					this.message.type = "error";
					this.message.text =
						"The details you entered were incorrect";
					this.message.show = true;
					setTimeout(() => (this.message.show = false), 4000);
				});
		}
	},
	mounted() {
		this.role = this.$cookies.get("role");
	}
};
</script>
