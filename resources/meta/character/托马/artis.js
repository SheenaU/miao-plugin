export default function ({ attr, rule, def }) {
  if (attr.mastery > 160) {
    return rule(‘托马-烈绽’ , {hp: 100, atk: 50, def: 0, cpct: 50, cdmg: 50, mastery: 100, dmg: 100, phy: 0, recharge: 90, heal: 0})
  }
  return def({hp: 100, atk: 50, def: 0, cpct: 50, cdmg: 50, mastery: 0, dmg: 100, phy: 0, recharge: 90, heal: 0 })
}
